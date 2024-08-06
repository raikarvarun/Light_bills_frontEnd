import { excuteQuery } from "./db";



export async function insertConsumer(data :any){
    try {
		let results :any  = await excuteQuery("insert into consumerdetails (consumerName , consumerNo , adminID) values (? , ? , ?)" , [data.consumerName , data.consumerNo , data.adminID]);
		
        return { data:results[0] , error:false}
		
	} catch (err) {
		return {data : err  , error:true}
	}
}