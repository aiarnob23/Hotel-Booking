
import { serverBaseUrl } from "./baseUrl"

export const postUser = async (email: string, name: string) => {
    const user = { email, name };
    const res = await fetch(`${serverBaseUrl}/user/create-user`, {
        method: "POST",
        headers: {
            "Content-Type":"application/json",
        },
        body:JSON.stringify(user),
    })
    const data = await res.json();
    return data?.data;
}