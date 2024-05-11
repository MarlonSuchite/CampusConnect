import { Post } from "../Interfaces/Post";
import postModel from "./post.model";
import { Request,Response } from "express";
const user = ['name', 'lastname', 'career', 'faculty']
const comment = ['description', 'user']

//Crear post
export const createPost = async(req: Request, res: Response) => {
    try{
        //Recibimos los datos para el post
        const data: Post = req.body
        data.date = new Date()
        data.user = req.user._id

        //Guardamos los datos del post
        const newPost = new postModel<Post>(data)
        await newPost.save()
        return res.send({message: 'Post agregado', newPost})

    }catch(e){
        return res.status(500)
               .send({message: 'Error de servidor'})
    }
}


//Obtener todos los post
export const getAllPost = async(req: Request, res: Response) => {
    try{
        console.log('1')

        const getPost = await postModel.find().populate('user', user).populate('comments', comment)//El populate nos trae los datos requeridos del usuario
        console.log('2')
        return res.send({message: 'Posts', getPost})
    }catch(e){
        return res.status(500).send({message: 'Error de servidor'})
    }
}