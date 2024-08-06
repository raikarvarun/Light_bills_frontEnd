import { CreateJWT } from "../middleware/jwtHepler";
import { excuteQuery } from "./db";


export async function LoginCall(data: any) {
	try {

		let results: any = await excuteQuery("select * from admintable where adminEmail=? and adminPassword=?", [data.email, data.password]);
		return { data:results[0] , error:false}
		
	} catch (err) {

	}
}