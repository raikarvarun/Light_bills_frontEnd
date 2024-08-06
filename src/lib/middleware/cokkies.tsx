import { cookies } from "next/headers";


export async function getSession() {
    // return true or false is session present in the cookies
    return cookies().has("session")
}