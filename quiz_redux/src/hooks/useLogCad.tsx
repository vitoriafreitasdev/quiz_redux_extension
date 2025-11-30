
import { useState } from "react";
import quizFetch from "../axios/config";

interface login {
    email: string,
    password: string
}

interface cad {
    name: string,
    email: string,
    password: string,
    confirmPassword: string
}
const UseLogCad = (rota: string, dados: login | cad) => {
    const [message, setMessage] = useState<string | null>(null)

    const sendData = async () => {
        try {
            const res = await quizFetch.post(rota, dados)
            if(res.status === 201){
                const token = localStorage.getItem("token")
                if(token) localStorage.removeItem("token")
                    
                localStorage.setItem("token", res.data.token)
         
                return res.data
            } else {
                setMessage(res.data.msg)
            }
            
        } catch (error) {
            console.log(error)
            setMessage("Aconteceu um erro")
        }
    }

    return {message, sendData}
}

export default UseLogCad