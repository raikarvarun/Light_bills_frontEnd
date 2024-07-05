import  React  from "react";
import Link from 'next/link'
import styles from './navbar.module.css'

const Nav = function (){
    
    return(
        <div>
            <ul className={styles.navul}>
                
                <li><Link href="/">Home</Link></li>
                <li><Link href="/signup">SIGN UP</Link></li>
                <li><Link href="/login">LOGIN</Link></li>
                 
                
                
            </ul>
        </div>
    );
}

export default Nav;