
import { useState } from "react";
import quizFetch from "../axios/config";

interface login {
    email: string,
    password: string
}


const UseLogin = (rota: string, dados: login) => {
    const [message, setMessage] = useState<string | null>(null)
    const login = async () => {
        try {
            const res = await quizFetch.post(rota, dados)
            if(res.status === 201){
                setMessage("Login feito com sucesso")
                localStorage.setItem("token", res.data.token)
                return res.data.id
            } else {
                setMessage(res.data.msg)
            }
            
        } catch (error) {
            console.log(error)
            setMessage("Aconteceu um erro")
        }
    }

    return {message, login}
}

export default UseLogin