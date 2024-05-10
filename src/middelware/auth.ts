import { Request, Response, NextFunction } from "express";
import { verifyToken } from "../helpers/jwt";
import { User } from "../Interfaces/User";

//Funcion para verificar que el usuario tiene token
export const existToken = async(req: Request, res: Response, next: NextFunction) => {
    try{
        const token = req.headers.authorization;
        //Verificar que exista un token
        if(!token){
            return res.status(403).send({message: 'Es necesario un token'})
        }
        //Validar que el token es correcto
        const tokenData = await verifyToken(token)
        if(typeof tokenData !== 'string'){//Si no es tipo string lo dejamos pasar
            next()
        }else{
            res.status(403)
            .send({message: 'Token Invalido'})
        }
        
    }catch(e){
        next(e)
        return res.status(403).send({message: 'Token invalido'})
    }
}

//Funcion para dejar solo administradores
export const isAdmin = async(req: Request, res: Response, next: NextFunction) => {
    try{    
        const token = req.headers.authorization;
        //Desencriptar el token
        if(!token){
            return res.status(403).send({message: 'Es necesario un token'})
        }
        //Validar que el token es correcto
        const tokenData = await verifyToken(token)
           if(typeof tokenData !== 'string'){
                if(tokenData.rol !== 'ADMIN') return res.status(403).send({message: 'Usuario no permitido'})
                    next()
           }
    }catch(e){
        return res.status(403).send({message: 'Usuario no autorizado'})
    }
}





















/*
    Darle solucion al token
*/







