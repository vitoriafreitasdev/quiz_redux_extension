const router = require("express").Router()
const quizController = require("../controllers/Quiz")
const checktoken = require("../utils/checktoken.js")
require("dotenv").config()

router.route("/cadastro").post((req, res) => quizController.register(req, res))
router.route("/login").post((req, res) => quizController.login(req, res))
router.route("/:id/js").put((req, res) => quizController.uptadeScoreJs(req, res))
router.route("/:id/python").put((req, res) => quizController.uptadeScorePython(req, res))
router.route("/:id/getUser").get(checktoken, (req, res) => quizController.getUser(req, res))
router.route("/getUsers").get((req, res) => quizController.getUsers(req, res))



module.exports = router