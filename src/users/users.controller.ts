import { Request, Response } from "express";
import {User} from '../Interfaces/User'
import Users from "./users.model";
import { encrypt, compare } from "../helpers/handlerBcrypt";
import { createToken } from "../helpers/jwt";

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

        
        const existAdmin = await Users.findOne({name: data.name, email: data.email})
        
        if(existAdmin) return console.log('El administrador ya existe', data.name)
        //Encriptacion de password    
        data.password = await encrypt(data!.password)

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
        data.password = await encrypt(data.password)

        //Agregar el nuevo usuario en la BD
        const addUser = new Users<User>(data)
        await addUser.save()
        return res.send({message: 'Usuario agregado con exito'})
    }catch(e){
        console.log(e)
        return res.status(500)
               .send({message: 'Error en el Servidor'})
    }
}


//Login
export const login = async(req: Request, res: Response) => {
    try{
        const data = req.body

        //Verificar que el usuario exista en la bd
        const existUser = await Users.findOne({email: data.email}) 
        console.log(existUser)

        //Verificar que la contraseña sea correcta
        if(!existUser){

            return res.status(404).send({message: 'Usuario no encontrado'})

        }else if(existUser && await compare(data.password, existUser.password)){

            //Creamos el token
            const token = await createToken(existUser)
            return res.send({message: 'Bienvenido a Campus Connect', token})

        }
        else{

            return res.status(401).send({message: 'Error al iniciar sesion'})

        }

    }catch(e){
        return res.status(500)
               .send({message: 'Error de servidor'})
    }
}   


//Obtener todos los usuario
export const getAllUsers = async(req: Request, res: Response) => {
    try{
        const allUsers = await Users.find({},{password: 0, license: 0})
        return res.send({messgage: 'Users', users: allUsers})
    }catch(e){
        return res.status(500)
               .send({message: 'Error de servidor'})
    }
}


//Obtener un unico usuario
export const getUser = async(req: Request, res: Response) => {
    try{
        const data = req.params.id
        //Busqueda de usuario por id
        const existUser = await Users.findOne({_id: data},{password: 0, license: 0})
        
        if(!existUser) return res.status(404).send({message: 'Usuario no encontrado'})
        
        return res.send({message: 'Usuario econtrado', user: existUser})
    }catch(e){
        return res.status(500)
               .send({message: 'Error de servidor'})
    }
}


//Modificar un usuario
export const updateUser = async(req: Request, res: Response) => {
    try{
        //Id para modificar usuario
        const { id } = req.params
        //Data a actualizar
        const data = req.body

        //Busqueda de usuario
        const existUser = await Users.findOne({_id: id})
        if(!existUser) return res.status(404).send({message: 'Usuario no encontrado'})
        
        const updatedUser = await Users.findOneAndUpdate(//Se usa esta funcion porque nos devuelve el dato actualizado
            {_id: id}, //Busca el registro que coincida con el id
            {//Campos a actualizar
                data
            },
            {new: true}//Nos devuelve el dato actualizado
        )
        if(!updatedUser) return res.status(400).send({message: 'Usuario no actualizado'})
            return res.send({message: 'Usuario actualizado', updatedUser})
    }catch(e){
        return res.status(500)
               .send({message: 'Error del servidor'})
    }    
} 









/* 




Segui Marlonnnnnnn
para el jwt 
https://medium.com/@diego.coder/autenticaci%C3%B3n-en-node-js-con-json-web-tokens-y-express-ed9d90c5b579







*/