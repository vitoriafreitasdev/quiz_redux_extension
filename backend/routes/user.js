const router = require("express").Router()
const quizController = require("../controllers/Quiz")
require("dotenv").config()

router.route("/cadastro").post((req, res) => quizController.register(req, res))
router.route("/login").post((req, res) => quizController.login(req, res))
router.route("/:id/scoreJs").put((req, res) => quizController.uptadeScoreJs(req, res))
router.route("/:id/scorePy").put((req, res) => quizController.uptadeScorePython(req, res))


module.exports = router