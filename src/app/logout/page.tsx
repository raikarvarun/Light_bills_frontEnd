
import { cookies } from "next/headers";
import { NextResponse } from "next/server";


const Logout =  ()=> {
    {
        'use server'
        cookies().set("session", "", { expires: new Date(0) });
    }
    

    return NextResponse.redirect('/login');
        
    
}

export default Logout ;  