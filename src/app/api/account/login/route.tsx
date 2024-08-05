
import { NextResponse } from 'next/server';
import { excuteQuery } from '@/lib/db';
import { CreateJWT } from '@/lib/help'; 

export async function POST(request: Request , response :Response) {
  try {
    const data  =await request.json();
    console.log(data);
    let results :any  = await excuteQuery("select * from admintable where adminEmail=? and adminPassword=?",[ data.email, data.password]);
    
	if(results.length===0){
		console.log("Length of result is 0 ");
	}
	else{
    let token = CreateJWT({adminID:1 , isAdmin:1 });
    console.log(token);
		return NextResponse.json({token:token,login:true})
			
	}
	return NextResponse.json({login:false})
	

  } catch (err) {
    
    const response = {
      error: (err as Error).message,
      returnedStatus: 200,
    }

    return NextResponse.json(response, { status: 200 })
  }
}
