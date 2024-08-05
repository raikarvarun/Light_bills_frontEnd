
import { NextResponse } from 'next/server'
import { excuteQuery } from '@/lib/db';

export async function GET(request: Request) {
  try {

    let results = await excuteQuery("select * from admintable",[]);
    return NextResponse.json(results)

  } catch (err) {
    
    const response = {
      error: (err as Error).message,
      returnedStatus: 200,
    }

    return NextResponse.json(response, { status: 200 })
  }
}
