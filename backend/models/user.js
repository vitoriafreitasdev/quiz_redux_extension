

const mongoose = require("mongoose")
const {Schema} = mongoose

const userSchema = new Schema(
    {
        name: {
            type: String,
            require: true
        },
        email: {
            type: String,
            require: true
        },
        password: {
            type: String,
            require: true
        },
        javascriptScore: {
            score: {
                type: Number,
                require: true,
            },
            maxScore: {
                type: Number,
                require: true
            }
        },
        pythonScore: {
            score: {
                type: Number,
                require: true,
            },
            maxScore: {
                type: Number,
                require: true
            }
        },
        biggestScore: {
            quizName: {
                type: String,
                require: true 
            },
            score: {
                type: Number,
                require: true 
            }
        }
    }
)

const User = mongoose.model("User", userSchema)

module.exports = User 