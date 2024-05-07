/* app.js */

import express from 'express'

const app = express()
const PORT = 3000 || 30001

app.use(express.json())//Midelware que transforma la req.body en un json

//Rutas


export const listen = () => {
    app.listen(PORT)
    console.log(`PUERTO CORRIENDO EN ${PORT}`)
}

