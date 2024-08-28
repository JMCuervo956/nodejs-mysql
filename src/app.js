
import express from 'express'
import {pool} from './db.js'
import {PORT} from './config.js'

const app = express()

app.get('/', async(req, res)=>{
    const rows = await pool.query("select * from users")
    res.json(rows)
})

app.get('/ping', async(req, res)=>{
    const [result] = await pool.query("select 'hola mundo' as result");
    res.json(result[0])
});

app.get('/create', async(req, res)=>{
    const result = await pool.query("INSERT INTO preguntas (texto, tipo, fecha, estado) VALUES ('¿Ajuste Datafano?', 'radio', CURDATE(), 0)");
    res.json(result)
});

 app.listen(PORT)
 console.log('Server en port', PORT)
