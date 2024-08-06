
import { NextResponse } from 'next/server';
import { excuteQuery } from '@/lib/db';
import { CreateJWT } from '@/lib/middleware/jwtHepler'; 
import { createResponse } from '@/lib/global';

export async function POST(request: Request , response :Response) {
  try {
    const data  =await request.json();
    console.log(data);
    let results :any  = await excuteQuery("select * from admintable where adminEmail=? and adminPassword=?",[ data.email, data.password]);
    
	if(results.length===0){
		console.log("Length of result is 0 ");
	}
	else{
    let token = await CreateJWT({adminID:results[0].adminID});
    const ans = await createResponse(200 , "" , token , {login:true} )
		return NextResponse.json(ans)
			
	}
  const ans = await createResponse(200 , "" , "" , {login:false} )
	return NextResponse.json(ans)
	

  } catch (err) {
    
    const response = {
      error: (err as Error).message,
      returnedStatus: 200,
    }

    return NextResponse.json(response, { status: 200 })
  }
}
