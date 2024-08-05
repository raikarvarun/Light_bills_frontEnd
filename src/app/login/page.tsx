
import React, { useEffect, useState } from "react";
import styles from './login.module.css'
import { redirect } from 'next/navigation'
import { loginButtonClicked } from "@/lib/help";

const Login = ()=> {
        

    return(
        <div className={styles.login}>
            <h1>LOGIN</h1>
			<form action={async (formData) =>{
				'use server'
				await loginButtonClicked(formData);
				
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