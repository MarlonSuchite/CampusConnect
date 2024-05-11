import { Comments } from '../Interfaces/Comments'
import modeloComment from './comments.model'
import postModel from '../post/post.model'
import userMode from '../users/users.model'
import { Request, Response } from 'express'
import usersModel from '../users/users.model'

//Crear comentario
export const createComment = async(req: Request, res: Response) => {
    try{
        //Obtener los datos del commentario
        const data = req.body
        data.commentTime = new Date()
        
        console.log('1', req.user._id)
        const existUser = await usersModel.findOne({_id: req.user._id})
        const user = {
            name: existUser?.name,
            lastname: existUser?.lastname,
            faculty: existUser?.faculty,
            career: existUser?.career
        }
        data.user = user
        const newComment = new modeloComment<Comments>(data)
        await newComment.save()


        //Buscar el id de coment
        const insertComment = await postModel.findOneAndUpdate(
            {_id: data.idPost},
            {
                $push: {comments: newComment._id}
            },
            {new: true}
        )

        return res.send({message: 'Comentario creado con exito', newComment, insertComment})
    }catch(e){
        return res.status(500)
               .send({message: 'Error de servidor'})
    }
}