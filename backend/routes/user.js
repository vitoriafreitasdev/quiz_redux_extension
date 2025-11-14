const router = require("express").Router()
const quizController = require("../controllers/Quiz")
require("dotenv").config()

router.route("/cadastro").post((req, res) => quizController.register(req, res))

module.exports = router