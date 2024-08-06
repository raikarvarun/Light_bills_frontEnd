import { auth } from "../middleware/auth"
import { insertConsumer } from "../database/cusumberTable";


export async function AddConsumerController(consumerName:string , consumerno:string){
    const adminID = await auth();
    const data = { consumerName:consumerName , 
        consumerNo:consumerno ,
        adminID:adminID}
    try{
        const ans:any = await insertConsumer(data)
        return ans 
    }
    catch(err){
        return err
    }
    
} 