import mysql from 'mysql2/promise'

let connectionParams = {
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  port:3306
}


export async function excuteQuery( query:string  , values:any[]  ) {
  try {

    const connection = await mysql.createConnection(connectionParams)
    const [results] = await connection.execute(query, values)
    connection.end()

    return results;
  } catch (error) {
    return { error };
  }
}
