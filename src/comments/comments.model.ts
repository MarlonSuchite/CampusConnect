import { Schema, model } from "mongoose";
import { Comments } from "../Interfaces/Comments";

const commentsSchema = new Schema<Comments>({
    description: String,
    user: {
        name: String,
        lastname: String,
        faculty: String,
        career: String
    },
    idPost: {
        type: Schema.Types.ObjectId,
        ref: 'Post'
    },
    like: {
        type: Number
    },
    noLike: {
        type: Number
    },
    commentTime: {
        type: Date
    }
})

export default model('Comments', commentsSchema)
