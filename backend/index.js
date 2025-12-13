

const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())

app.use(express.json())

const connect = require("./db/connection.js")
connect()

const routes = require("./routes/router.js")
app.use("/", routes)

app.listen(3000, function(){
    console.log("Servidor Online.")
})

