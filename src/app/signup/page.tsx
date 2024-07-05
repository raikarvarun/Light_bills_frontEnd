'use client'
import React, { useEffect, useState } from "react";
import styles from './signup.module.css'

const Signup =()=>{
    const [name , setName] = useState("");
    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
    
    
    return(
        <div className={styles.signup}>
            <h1>SIGN UP</h1>
            <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
            <input type="text" placeholder="Enter Emial" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
            <input type="password" placeholder="Enter Password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
            <button className={styles.signupButton} type="button" >Signup </button>

        </div>
    )
}

export default Signup;