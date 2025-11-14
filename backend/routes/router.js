const router = require("express").Router()
const quizServer = require("./user")

router.use("/", quizServer)

module.exports = router