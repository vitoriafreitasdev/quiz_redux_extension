const maiores = [
    {score: {quizName: "exemplo", score: 10}, name: "joao"},
    {score: {quizName: "exemplo2", score: 30}, name: "maria"},
    {score: {quizName: "exemplo3", score: 60}, name: "leticia"},
]

console.log(maiores[0].score.score)

let teste = {score: {quizName: "", score: 0}, name: ""}

/* 


{
  "name": "backend",
  "version": "1.0.0",
  "main": "index.js",
  "scripts": {
    "start": "nodemon index.js",
    "vercel-build": "index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": "",
  "dependencies": {
    "bcrypt": "^6.0.0",
    "cors": "^2.8.5",
    "dotenv": "^17.2.3",
    "express": "^5.1.0",
    "jsonwebtoken": "^9.0.2",
    "mongoose": "^8.19.3"
  },
  "devDependencies": {
    "nodemon": "^3.1.11"
  }
}


*/



const callback = () => {
  console.log("Ola")
}

function funcTest(callback){
  callback()
}

funcTest(callback)