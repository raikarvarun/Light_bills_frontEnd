import { LoginButtonClicked } from '@/lib/actions/loginActions'
import styles from './login.module.css'
import { redirect } from 'next/navigation'

const Login = ()=> {
        

    return(
        <div className={styles.login}>
            <h1>LOGIN</h1>
			<form action={async (formData) =>{
				'use server'
				await LoginButtonClicked(formData);
				redirect('/')
			} }>
				<div>
					<label>Name</label>
					<input type="text" name="email" placeholder="Enter Emial"/>
				</div>
			
				<div>
					<label>Email</label>
					<input type="text" name="password" placeholder="Enter Password"/>
				</div>
			
				<button className={styles.loginButton} type="submit">Login </button>
			</form>
        </div>
    )
}

export default Login ;  