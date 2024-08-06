import { cookies } from "next/headers";
import { VerifyJWT } from "./jwtHepler";


export async function auth() {
    //return adminID accociate with that user cookies
    const session = await cookies().get("session")
    //console.log(session)
    if(session){
        const decoded:any = await VerifyJWT(session)
        console.log(decoded)
        return decoded.adminID;
    }
    return null
}