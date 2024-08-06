import { LoginCall } from "../database/adminTable";
import { CreateJWT } from "../middleware/jwtHepler";



export async function LoginController(email: string, password: string) {
    const data = {
        email: email,
        password: password
    }
    try {
        const ans: any = await LoginCall(data)
        if (ans.length === 0) {
			return { token: null, login: false }
		}
		else {

			let token = await CreateJWT({ adminID: ans[0].adminID });
			return { token: token, login: true }
		}
    }
    catch (err) {
        return err
    }

} 