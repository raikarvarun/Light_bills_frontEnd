import { NextResponse } from 'next/server'
import {excuteQuerySingle , excuteQuery} from '@/lib/db';

export async function GET(request: Request) {
    try {
        const result = await excuteQuery(
            'INSERT INTO admintable ( adminEmail, adminPassword, adminToken) VALUES(?, ?, ?)',
             [ "test1", "sdfasdf", "sjdkfjsjfksdjkf"],
        );
        console.log( result );
        return NextResponse.json({done:"Done"});
        
      } catch ( error ) {
        console.log( error );
      }
      
  }