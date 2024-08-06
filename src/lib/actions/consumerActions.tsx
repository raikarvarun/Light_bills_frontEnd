import { AddConsumerController } from "../controller/consumberController"


export async function SubmitAddConsumber(formData:FormData) {
    let consumerNo :string = formData.get('consumerno') as string 
    let consumerName :string = formData.get('name') as string
    try {
        await AddConsumerController(consumerName , consumerNo)
        formData.set('consumerno' , '')
        formData.set('name' , '')
    }
    catch(err){
        return err
    }
}