const mongoose = require("mongoose")
require("dotenv").config()
const dbUser = process.env.dbUser
const dbPass = process.env.dbPass

async function main() {
    try {
        mongoose.set("strictQuery", true)

        await mongoose.connect(`mongodb+srv://${dbUser}:${dbPass}@cluster0.kquzr1d.mongodb.net/?appName=Cluster0`)

        console.log("Conectado ao banco de dados")
    } catch (error) {
        console.log(error)
    }
}

module.exports = main