import  React  from "react";
import Link from 'next/link'
import styles from './navbar.module.css'
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { logout } from "@/lib/actions/logoutActiions";

const Nav = function (){
    const session = cookies().get('session')?.value;
    return(
        <div>
            <ul className={styles.navul}>
                
                <li><Link href="/home">Home</Link></li>
                
                
                
                {session && ( 
                    <> 
                    <li><Link href="/dashboard">Dashboard</Link></li>
                    <li><Link href="/addconsumer">Add</Link></li>
                    <li><Link href="/showconsumer">ShowConsumer</Link></li>
                    <li><form
                            action={async () => {
                                "use server";
                                    await logout();
                                    redirect('/');
                                }} >
                            <button type="submit">LOGOUT</button> 
                        </form>
                    </li>
                    </>)}
                {!session && ( 
                    <>
                        <li><Link href="/signup">SIGN UP</Link></li>
                        <li><Link href="/login">LOGIN</Link></li>
                    </> )}
                

                 
                
                
            </ul>
        </div>
    );
}

export default Nav;