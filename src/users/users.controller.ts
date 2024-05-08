import { Request, Response } from "express";
import {User} from '../Interfaces/User'
import Users from "./users.model";


//Funcion para el usuario Administrador

export const createAdmin = async() => {
    try{
        const data: User = {        
            license: '1234567890',
            name: 'Marcos',
            lastname: 'Flores',
            gender: 'Masculino',
            faculty: 'Ingenieria',
            career: 'Ingenieria',
            email: 'mflores@gmail.com',
            password: '123',
            rol: 'ADMIN'
        }

        const existAdmin = await Users.find({name: data.name, email: data.email})
        
        if(existAdmin) return console.log('El administrador ya existe', data.name)
        const newUser = new Users<User>(data)
        await newUser.save()
        return console.log({message: 'Usuario agregado con exito'})
        
    }catch(e){
        return console.log({message: 'Error Server'})
    }
}


//Crear nuevo usuario
export const newUser = async(req: Request, res: Response) => {
    try{
        const data: User = req.body
        
        //Validar que el rol no venga en la data
        if(data.rol) return res.status(400).send({message: 'El rol no debe ser agregado'})

        //Verificar si el usuario ya existe
        const existUser = await Users.findOne({name: data.name, email: data.email})
        if(existUser) return res.status(409).send({message: 'El usuario ya existe'})
        
        data.rol = 'USER'

        //Agregar el nuevo usuario en la BD
        const addUser = new Users<User>(data)
        await addUser.save()
        return res.send({message: 'Usuario agregado con exito'})
    }catch(e){
        console.log(e)
        return res.status(500).send({message: 'Error en el Servidor'})
    }
}














/* 




Segui Marlonnnnnnn








*/