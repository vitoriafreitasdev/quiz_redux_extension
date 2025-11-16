const jwt = require("jsonwebtoken")
require("dotenv").config()
const secret = process.env.secret

function checktoken(req, res, next) {

    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(" ")[1]
    console.log(authHeader)
    console.log(token)

    if(!token){
        return res.status(401).json({msg: "Acesso negado."})
    }

    try {
        jwt.verify(token, secret)
        next()
    } catch (error) {
        console.log(error)
        return res.status(400).json({msg: "Aconteceu um erro."})

    }
}

module.exports = checktoken
