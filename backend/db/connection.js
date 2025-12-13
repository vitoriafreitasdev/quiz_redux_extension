

const mongoose = require("mongoose")
require("dotenv").config()

const dbUser = process.env.dbUser
const dbPass = process.env.dbPass

const dbConn = process.env.MONGODB_URI

// tentar fazer a api funcionar nao esta conectando no banco de dados, fala q ouvi um erro no endereço IP

async function main() {
    try {
        mongoose.set("strictQuery", true)

        await mongoose.connect(dbConn)

        console.log("Conectado ao banco de dados")
    } catch (error) {
        console.log(error)
    }
}

module.exports = main