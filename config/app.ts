/* app.js */

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.json())//Midelware que transforma la req.body en un json
app.use(morgan('dev'))
app.use(cors())

//Rutas

export const listen = () => {
    app.listen(PORT)
    console.log(`PUERTO CORRIENDO EN ${PORT}`)
}

