'use client'
import React, { useEffect, useState } from "react";
import { redirect } from 'next/navigation'
import styles from './login.module.css'


const Login = ()=> {
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState(""); 
    const [msg , setMsg] = useState("");
    useEffect(()=>{
        const auth = localStorage.getItem('user');
        if(auth) {redirect('/')} ;
    }
    );
  

    return(
        <div className={styles.login}>
            <h1>LOGIN</h1>
            {msg}
            <input type="text" placeholder="Enter Emial" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
            <input type="text" placeholder="Enter Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
            <button className={styles.loginButton} type="button" >Login </button>

        </div>
    )
}

export default Login ;  