import axios from "axios"; 
// https://quiz-redux-extension-backend.vercel.app
// http://localhost:3000
const quizFetch = axios.create({
    baseURL: "https://quiz-redux-extension-backend.vercel.app",
    headers: {
        "Content-Type": "application/json"
    }
})

quizFetch.interceptors.request.use((config) => {
    const token = localStorage.getItem("token")
    if(token){
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
}, (error) => {
    return Promise.reject(error)
})

export default quizFetch