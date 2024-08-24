import express from 'express'
import {pool} from './db.js'
import {PORT} from './config.js'

const app = express()

// probar conexion al front

//app.get('/', (req, res)=>{
//    res.send('bienvenido')
//}) 
 

app.get('/', async(req, res)=>{
    const rows = await pool.query("select * from sarlaft.preguntas")
    res.json(rows)
})

app.get('/ping', async(req, res)=>{
    const [result] = await pool.query("select 'hola mundo' as result");
//    console.log(result[0])  
//    res.send('hola mundo')
    res.json(result[0])
});

app.get('/create', async(req, res)=>{
    const result = await pool.query("INSERT INTO sarlaft.preguntas (texto, tipo, fecha, estado) VALUES ('¿Ajuste Datafano?', 'radio', CURDATE(), 0)");
    res.json(result)
});

 app.listen(PORT)
 console.log('Server en port', PORT)

 // Consultar modulos de uso de puertos
 // logging, morgan, winston, pino, etc

