import { cookies } from "next/headers";
import { LoginController } from "../controller/LoginController";



export async function LoginButtonClicked(formData:FormData) {
    
    let email :string = formData.get('email') as string 
    let password :string = formData.get('password') as string
    try {
        let res:any = await LoginController(email , password); 
        
        if(res.login){
              // Save the session in a cookie
              const expires = new Date(Date.now() + 10 * 10000);
              const session = res.token;
              cookies().set("session", session );
          
        }else{
          console.log("Oops! Something is wrong.")
        }
      } catch (error) {
          console.log(error)
      }
}
