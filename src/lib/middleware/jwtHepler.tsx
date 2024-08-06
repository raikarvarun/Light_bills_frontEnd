'use server'
import { cookies } from "next/headers";
const jwt = require("jsonwebtoken");

export async function CreateJWT(data:any){
    let token = await jwt.sign({ 
        adminID: data.adminID
      },
      process.env.TOKEN_KEY,
      {
        expiresIn: "24h",
      });
    return token;
}

export async function VerifyJWT(session:any){
    console.log("I am in verify JWT")
    console.log("session\n"  + session)
    console.log("session value\n"  + session.value)

    let decoded  = await jwt.verify(session.value, process.env.TOKEN_KEY);
    console.log("decosed\n"  + decoded)

    return decoded;
}

export async function logout() {
  	// Destroy the session
  	cookies().set("session", "", { expires: new Date(0) });
	return
}
