import pg from'pg';import fs from'node:fs/promises';import path from'node:path';import{fileURLToPath}from'node:url';
const{Pool}=pg;let pool:pg.Pool|undefined;
export function db(){if(pool)return pool;if(!process.env.DATABASE_URL)throw Error('DATABASE_URL missing');pool=new Pool({connectionString:process.env.DATABASE_URL,ssl:process.env.DATABASE_SSL==='false'?false:{rejectUnauthorized:false},max:10});return pool}
export async function q<T extends Record<string,any>=Record<string,any>>(sql:string,params:any[]=[]):Promise<T[]>{return(await db().query<T>(sql,params)).rows}
export async function tx<T>(fn:(c:pg.PoolClient)=>Promise<T>){const c=await db().connect();try{await c.query('BEGIN');const v=await fn(c);await c.query('COMMIT');return v}catch(e){await c.query('ROLLBACK');throw e}finally{c.release()}}
export async function migrate(){const file=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'../../migrations/001_bashpay.sql');await db().query(await fs.readFile(file,'utf8'))}
