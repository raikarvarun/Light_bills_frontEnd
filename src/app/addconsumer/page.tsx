import { SubmitAddConsumber } from "@/lib/actions/consumerActions";

import styles from './addconsumer.module.css'

const AddConsumer = () =>{

    return  (
        <div className={styles.login}>
            <form action={async (formData)=>{
                'use server'
                 await SubmitAddConsumber(formData)
            }}>
                <div>
                    <label>Consumer No</label>
                    <input type="text" name="consumerno" placeholder="Consumer No"/>
                </div>
                <div>
                    <label>Nick Name</label>
                    <input type="text" name="name" placeholder="Nick Name"/>
                </div>
                <div>
                    <button className={styles.loginButton} type="submit" >Add Consumer</button>
                </div>
            </form>
        </div>
    );
}

export default AddConsumer;