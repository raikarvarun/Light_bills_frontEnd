'use server'
import { cookies } from "next/headers";
import { NextResponse } from 'next/server';
import { excuteQuery } from '@/lib/db';

const jwt = require("jsonwebtoken");


export async function CreateJWT(data:any){
    let token = await jwt.sign({ 
        adminID: data.adminID,
        isAdmin : data.isAdmin
      },
      process.env.TOKEN_KEY,
      {
        expiresIn: "24h",
      });
    return token;
}

export async function VerifyJWT1(data:any){
    let decoded  = jwt.verify(data, process.env.TOKEN_KEY);
    return decoded.adminID;
}

export async function logout() {
  	// Destroy the session
  	cookies().set("session", "", { expires: new Date(0) });
	return
}

export async function loginButtonClicked(formData:FormData){
	cookies().set('name', 'lee')
    console.log("I am in login Button Clicked")
    const submitData = {"email":formData.get('email'),"password":formData.get('password')}

    try {
      let res:any = await LoginCall(submitData); 
	  console.log(res);
      if(res.login){
        console.log("Yeai!")
        const data = res;
		console.log("Satata")
        console.log(data);
        if(data.login){
            // Save the session in a cookie
            const expires = new Date(Date.now() + 10 * 10000);
            const session = data.token;
            cookies().set("session", session);
            
        }
      }else{
        console.log("Oops! Something is wrong.")
      }
    } catch (error) {
        console.log(error)
    }
    
}

export async function LoginCall(data:any) {
	try {
		
		let results :any  = await excuteQuery("select * from admintable where adminEmail=? and adminPassword=?",[ data.email, data.password]);
		
		if(results.length===0){
			console.log("Length of result is 0 ");
		}
		else{
			let token = await CreateJWT({adminID:1 , isAdmin:1 });
			
			return {token:token,login:true}
				
		}
		
		

	} catch (err) {
		
		const response = {
		error: (err as Error).message,
		returnedStatus: 200,
		}

		return response;
	}
}