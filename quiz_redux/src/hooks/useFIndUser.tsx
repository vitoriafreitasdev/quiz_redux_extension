
import { useEffect, useState } from "react";
import quizFetch from "../axios/config";
export interface userData {
    score: {
        quizName: string,
        score: number
    },
    js: {
        maxScore: number,
        score: number
    },
    py: {
        maxScore: number,
        score: number
    },
}
export const UseFindUser = (id: string | undefined) => {
    const [user, setUser] = useState<userData | null>(null)

    useEffect(() => {
        async function getUser() {
            try {
                const res = await quizFetch.get(`/${id}/getUser`)
                const dataUser: userData  = {
                    score: res.data.biggestScore,
                    js: res.data.javascriptScore,
                    py: res.data.pythonScore
                }
                setUser(dataUser)
            } catch (error) {
                console.log("Erro da requisição do usuário: ", error)
            }
        }

        getUser()
    }, [id])

    return user
}