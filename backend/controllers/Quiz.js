const User = require("../models/user.js")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcrypt')

require("dotenv").config()

const quizController = {
    register: async (req, res) => {
        const {name, email, password} = req.body 

        const user = await User.findOne({email: email})

        if(user){
            return res.status(422).json({msg: "Esse e-mail de usuário já existe, coloque outro."})
        }
        
        const salt = await bcrypt.genSalt(12)
        const cryptPass = await bcrypt.hash(password, salt)
        
        const userAdd = {
            name: name, 
            email: email,
            password: cryptPass
        }

        const creation = await User.create(userAdd)

        res.status(201).json({creation, msg: "Conta criada com sucesso."})
    }
}

module.exports = quizController