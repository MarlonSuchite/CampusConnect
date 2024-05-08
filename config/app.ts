/* app.js */

import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import userRouters from '../src/users/users.routes'

const app = express()
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({extended: false}));//Permite leer datos mandados por el suusario de forma encriptada
app.use(express.json())//Midelware que permite leer los json recibidos por los usuarios
app.use(morgan('dev'))
app.use(cors())

//Rutas
app.use('/user', userRouters)

export const listen = () => {
    app.listen(PORT)
    console.log(`PUERTO CORRIENDO EN ${PORT}`)
}

