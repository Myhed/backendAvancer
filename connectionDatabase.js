import { createConnection, createPool } from 'mysql2';

const connection = createPool({
    host: 'localhost',
    user: 'tata',
    password: 'titi',
    database: 'hospital',
    port: 3306
 }).promise();


 export {connection}