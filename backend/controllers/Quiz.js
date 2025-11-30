const User = require("../models/user.js")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

require("dotenv").config()
const secret = process.env.secret

const quizController = {
    register: async (req, res) => {
        try {
            const {name, email, password, confirmPassword} = req.body 

            const user = await User.findOne({email: email})

            if(user) return res.status(422).json({msg: "Esse e-mail de usuário já existe, coloque outro."})
            
            if(password !== confirmPassword) return res.status(422).json({msg: "Senhas diferentes."})

            const salt = await bcrypt.genSalt(12)
            const cryptPass = await bcrypt.hash(password, salt)
            
            const userAdd = {
                name: name, 
                email: email,
                password: cryptPass,
                javascriptScore: {
                    score: 0,
                    maxScore: 0
                },
                pythonScore: {
                    score: 0,
                    maxScore: 0
                },
                biggestScore: {
                    quizName: "",
                    score: 0
                }
            }

            const creation = await User.create(userAdd)
            const id = creation.id
            const token = jwt.sign({id: id}, secret)
            
            res.status(201).json({creation, token, msg: "Conta criada com sucesso."})
        } catch (error) {
            console.log(error)
            return res.status(422).json({msg: "Erro no sistema, tente novamente."})
        }
    },
    login: async (req, res) => {
        try {
            const {email, password} = req.body 

            const user = await User.findOne({email: email})

            if(!user) return res.status(404).json({msg: "Usuário não encontrado."})

            const checkingPass = await bcrypt.compare(password, user.password) 

            if(!checkingPass) return res.status(422).json({msg: "Senha errada."})
            
            const id = user.id
            const token = jwt.sign({id: id}, secret)

            res.status(201).json({token, id, msg: "Login feito com sucesso."})
        } catch (error) {
            console.log(error)
            return res.status(422).json({msg: "Erro no sistema, tente novamente."})
        }
    },
    uptadeScoreJs: async (req, res) => {
        try {
            const {score} = req.body 
            const id = req.params.id 
            
            const user = await User.findById(id) 

            if(!user) return res.status(404).json({msg: "Usuário não encontrado."})

            user.javascriptScore.score = score 

            if(user.javascriptScore.score > user.javascriptScore.maxScore){
                user.javascriptScore.maxScore = score
            }

            if(user.javascriptScore.maxScore > user.biggestScore.score){
                user.biggestScore.score = user.javascriptScore.maxScore
                user.biggestScore.quizName = "JavaScript"
            }

            const userUptade = await user.save()

            res.status(201).json({userUptade, msg: "Pontuação atualizada com sucesso."})

        } catch (error) {
            console.log(error)
            return res.status(422).json({msg: "Erro no sistema, tente novamente."})
        }
    },
    uptadeScorePython: async (req, res) => {
        try {
            const {score} = req.body 
            const id = req.params.id 
            
            const user = await User.findById(id) 

            if(!user) return res.status(404).json({msg: "Usuário não encontrado."})

            user.pythonScore.score = score 

            if(user.pythonScore.score > user.pythonScore.maxScore){
                user.pythonScore.maxScore = score
            }

            if(user.pythonScore.maxScore > user.biggestScore.score){
                user.biggestScore.score = user.pythonScore.maxScore
                user.biggestScore.quizName = "Python"
            }

            const userUptade = await user.save()

            res.status(201).json({userUptade, msg: "Pontuação atualizada com sucesso."})

        } catch (error) {
            console.log(error)
            return res.status(422).json({msg: "Erro no sistema, tente novamente."})
        }
    },
    getUser: async (req, res) => {
        try {
            const id = req.params.id 
            const user = await User.findById(id)
            if(!user) return res.status(404).json({msg: "Usuário não encontrado."})
            return res.status(201).json(user)
        } catch (error) {
            console.log(error)
            return res.status(422).json({msg: "Erro no sistema, tente novamente."})
        }
    },
    getUsers: async (req, res) => {
        try {
            const users = await User.find()
            if(!users) return res.status(404).json({msg: "Usuários não encontrados."})
            return res.status(201).json(users)
        } catch (error) {
            console.log(error)
            return res.status(422).json({msg: "Erro no sistema, tente novamente."})
        }
    }

}

module.exports = quizController