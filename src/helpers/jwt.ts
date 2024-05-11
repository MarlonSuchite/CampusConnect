//importamos jsonwebtoken
import jwt, {JwtPayload} from 'jsonwebtoken'
import { User } from '../Interfaces/User'
import { Token } from '../Interfaces/Token'

/* 
    Partes de un token
    Payload(Carga Util) => Contiene los datos que se desean incluir en el token
    Secret Key(Clave secreta) => Clave unicamente conocida por el servidor utilizada para firmar el token
    Expiration(Caducidad) => Configuraciones adicionales del token
*/

//Funcion para crear token
export const createToken = async(data: User): Promise<string> => {
    try{
        const payload: Partial<User>  = {  
            _id: data._id,  
            license: data.license,
            faculty: data.faculty,
            career: data.career,
            email: data.email,
            rol: data.rol
        }

        return jwt.sign(
            payload, //Carga util
            `${process.env.SECRET_KEY}`, //Firma
            {
                expiresIn: 60 * 60 //Tiempo en expirar 1 hora
            }
        )
    }catch(e){
        console.log(e)
        return 'Error en la creacion del token'
    }

}

//Funcion para verificar el token
export const verifyToken = async(token: string) => {
    try{
        const valueToken = token.replace(/['"]+/g, '') //Le quitamos las comillas al token
        return jwt.verify(valueToken, `${process.env.SECRET_KEY}`)//Devolvemos un token tipo JwtPayload
    }catch(e){
        console.error(e)
        return 'Token no valido'
    }
} 