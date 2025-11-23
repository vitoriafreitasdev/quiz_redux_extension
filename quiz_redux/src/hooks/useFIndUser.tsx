
import { useEffect, useState } from "react";
import quizFetch from "../axios/config";

export const UseFindUser = (id: string | undefined) => {
    const [user, setUser] = useState()
    
    useEffect(() => {
        async function getUser() {
            const res = await quizFetch.get(`/${id}/getUser`)
            setUser(res.data)
        }

        getUser()
    }, [id])

    return user
}