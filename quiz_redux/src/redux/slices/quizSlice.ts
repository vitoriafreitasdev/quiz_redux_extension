
/* eslint-disable @typescript-eslint/no-explicit-any */

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import data from "../questionsQuiz/questions.ts"
import pythonQuest from "../questionsPython/questionsPy.ts";
import quizFetch from "../../axios/config.ts";

const stages: string[] = ["inicial", "meio", "fim"]

interface questions {
    number: number,
    question: string,
    options: string[],
    answer: string
}

interface answers {
    number: number
    question: string
    answer: string
}

interface inicialState {
    userId: string,
    gamestages: string
    questions: questions[] | null
    correctAnswer: number
    wrongAnswer: number
    answersSelects: answers[] 
    message: string
    porcentagemDeAcerto: number
    quizName: string
    usersBiggestScore: maioresData[] | null
}
const inicialState: inicialState = {
    userId: "",
    gamestages: stages[0],
    questions: null,
    correctAnswer: 0,
    wrongAnswer: 0,
    answersSelects: [],
    message: "",
    porcentagemDeAcerto: 0,
    quizName: "",
    usersBiggestScore: null
}

interface maioresData {
    score: number
    quizName: string
    name: string
}

// funções assincronas 

interface datas {
    url: string,
    uptate: {
        score: number
    }
}
export const addScore = createAsyncThunk("user/addscore", async (data: datas) => {
    const res = await quizFetch.put(data.url, data.uptate)
    return res.data
})

export const getQuizUsers = createAsyncThunk("quiz/getUsers", async () => {
    const res = await quizFetch.get("/getUsers")
    return res.data
})

const quizSlice = createSlice({
    name: "createSlice",
    initialState: inicialState,
    reducers: {
        startGame: (state, action) => {     
            if(action.payload.quiz === "python"){
                state.questions = pythonQuest
                state.quizName = "python"
            } else {
                state.questions = data
                state.quizName = "js"

            }
            state.userId = action.payload.id
            state.gamestages = stages[1]
            
        },
        selectAnswer: (state, action) => {
            

            const question: string = action.payload.question
            const answer: string = action.payload.answer
            const number: number = action.payload.number

            // Encontra o índice da resposta existente para esta pergunta
            const existingAnswerIndex = state.answersSelects.findIndex(
                item => item.question === question
            )
            
            if (existingAnswerIndex === -1) {
                // Se não existe, adiciona a nova resposta
                state.answersSelects.push({number, question, answer})
            } else {
                // Se já existe, substitui a resposta existente
                state.answersSelects[existingAnswerIndex].answer = answer
            }
        },
        goToEnd: (state) => {
            if(state.questions){
                
                if(state.answersSelects.length === state.questions.length){
                state.gamestages = stages[2]
                } else {
                    state.message = "Responda todas as questões."
                }
            }
        },
        correctingAnswers: (state) => {
            state.correctAnswer = 0
            state.wrongAnswer = 0
            const questõesOrdenadas = state.answersSelects.sort((a, b) => a.number - b.number)
            if(state.questions){
                for(let i = 0; i < state.questions.length; i++){
                    if(state.questions[i].answer === questõesOrdenadas[i].answer){
                        state.correctAnswer += 1
                    }else if(state.questions[i].answer !== questõesOrdenadas[i].answer){
                        state.wrongAnswer += 1
                    }else{
                        state.message = "Algo deu errado"
                    }
                }

                const acertoPorcetagem = (state.correctAnswer / state.questions.length) * 100
                state.porcentagemDeAcerto = Math.round(acertoPorcetagem) 
  
            }
        },
        backToStart: (state) => {
            state.userId = ""
            state.gamestages = stages[0]
            state.questions = null
            state.correctAnswer = 0
            state.wrongAnswer = 0
            state.answersSelects = []
            state.message = ""
            state.porcentagemDeAcerto = 0
            state.quizName = ""
            state.usersBiggestScore = null

        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(addScore.pending, () => {
                console.log("Carregando...")
            })
            .addCase(addScore.fulfilled, (_, action) => {
                console.log(action.payload)
            })
            .addCase(addScore.rejected, () => {
                console.log("Algo deu errado")
            })
            .addCase(getQuizUsers.pending, () => {
                console.log("Carregando...")
            })
            .addCase(getQuizUsers.fulfilled, (state, action) => {
                const data = action.payload
               
                const scores:  maioresData[]  = []
    
                data.forEach((d: {
                    [x: string]: string; biggestScore: any; 
                }) => {
                    scores.push({score: d.biggestScore.score, quizName: d.biggestScore.quizName, name: d.name})
                });

                 // Ordenar por score (do maior para o menor)
                const scoresOrdenados = scores
                    .filter(item => item.score > 0)
                    .sort((a, b) => b.score - a.score)

                // Pegar os 5 melhores
                state.usersBiggestScore = scoresOrdenados.slice(0, 5)
            })
            .addCase(getQuizUsers.rejected, () => {
                console.log("Algo deu errado")
            })
    } 

})
export const {startGame, selectAnswer, goToEnd, correctingAnswers, backToStart} = quizSlice.actions
export default quizSlice.reducer