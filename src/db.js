import {createPool} from 'mysql2';
//import {createConnection} from 'mysql2/promise';
import mysql from 'mysql2/promise';
import {
    DB_HOST,
    DB_NAME,
    DB_PASSWORD,
    DB_USER,
    DB_PORT
} from './config.js';

export const pool = mysql.createPool({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_NAME,
    port: DB_PORT
})

/*

export const pool = mysql.createPool({
    host: 'localhost',
    user: 'josema',
    password: 'josema',
    database: 'sarlaft',
    port: 3306
})

connection.connect((error)=>{
    if(error){
        console.log('Error de Conexion es: '+error);
        return;
    };
    console.log('conectado a la base de datos');
 });
 
module.exports = connection;
*/