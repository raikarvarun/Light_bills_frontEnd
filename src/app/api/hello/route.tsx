import { NextResponse } from 'next/server'
import {excuteQuerySingle} from '@/lib/db';


export async function GET(request: Request) {
  try {
    let result = await excuteQuerySingle('SELECT * FROM admintable');
    return NextResponse.json({msg :"hello",result1:result});
} catch (error) {
    console.log(error);
}
}




