
export async function createResponse(status:number , msg:string,token:string, data:any  ) {
    return {
        status :status , 
        msg : msg, 
        token :token , 
        data : data
    }
}