/* eslint-disable @typescript-eslint/no-explicit-any */

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
            setMessage(null)

            const res = await quizFetch.post(rota, dados)

            if(res.status === 201){
                const token = localStorage.getItem("token")
                if(token) localStorage.removeItem("token")
                    
                localStorage.setItem("token", res.data.token)
            
                return res.data
            } 
        } catch (error: any) {
            console.log(error)
            if(error.response.data.msg) {
                setMessage(error.response.data.msg)
            } else {
                setMessage("Ocorreu um erro no sistema, tente novamente mais tarde.")
            }

        }
        
    }

    return {setMessage, message, sendData}
}

export default UseLogCad