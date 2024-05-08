//Varianles de entorno
import "dotenv/config.js";//Es necesario para poder utilizarce en toda la aplicacion

import { createAdmin } from "./src/users/users.controller";
import {listen} from './config/app'
import connectionDB from './config/mongo'

//Iniciar el servidor
listen()

//Conexion a la Base de Datos
connectionDB()

createAdmin()