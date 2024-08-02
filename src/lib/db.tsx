'use server'
import mysql from 'serverless-mysql';
const db = mysql({
  config: {
    host: process.env.DATABASE_HOST,
    database: process.env.DATABASE_NAME,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    port:3306
  }
});

export async function excuteQuerySingle(query:string  ) {
    try {
      
      let results = await db.query(query);
      
      await db.end();
      return results;
    } catch (error) {
      return { error };
    }
  }
export async function excuteQuery( query:string  , values:string[]  ) {
  try {
    console.log("Query is this"+query);
    const results = await db.query(query, values);
    await db.end();
    return results;
  } catch (error) {
    console.log("I am here");
    console.log(error);

    console.log(
        error instanceof AggregateError
      );
    return { error };
  }
}