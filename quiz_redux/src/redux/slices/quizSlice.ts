
import { createSlice } from "@reduxjs/toolkit";
import data from "../questionsQuiz/questions.ts"
import pythonQuest from "../questionsPython/questionsPy.ts";

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
    gamestages: string
    questions: questions[] | null
    correctAnswer: number
    wrongAnswer: number
    answersSelects: answers[] 
    message: string
    porcentagemDeAcerto: number
}
const inicialState: inicialState = {
    gamestages: stages[0],
    questions: null,
    correctAnswer: 0,
    wrongAnswer: 0,
    answersSelects: [],
    message: "",
    porcentagemDeAcerto: 0

}

const quizSlice = createSlice({
    name: "createSlice",
    initialState: inicialState,
    reducers: {
        startGame: (state, action) => {     
            if(action.payload === "python"){
                state.questions = pythonQuest
            } else {
                state.questions = data
            }

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
                    console.log("Resposta ", state.questions[i].answer)
                    console.log("A Selecionada ", questõesOrdenadas[i].answer)
                    if(state.questions[i].answer === questõesOrdenadas[i].answer){
                        state.correctAnswer += 1
                    }else if(state.questions[i].answer !== questõesOrdenadas[i].answer){
                        state.wrongAnswer += 1
                    }else{
                        state.message = "Algo deu errado"
                        console.log("Deu erro")
                    }
                }

                const acertoPorcetagem = (state.correctAnswer / state.questions.length) * 100
                state.porcentagemDeAcerto = Math.round(acertoPorcetagem) 
            }
        },
        backToStart: (state) => {
            state.gamestages = stages[0]
            state.questions = null
            state.answersSelects = []
            state.message = ""

        }
    }

})
export const {startGame, selectAnswer, goToEnd, correctingAnswers, backToStart} = quizSlice.actions
export default quizSlice.reducer