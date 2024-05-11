import { Schema, model } from "mongoose";
import { Post } from "../Interfaces/Post";

const postSchema = new Schema<Post>({
    description: {
        type: String, 
        required: true,
    },
    category: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    anonymous: {
        type: Boolean,
        required: true
    },
    date: {
        type: Date,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'Users'
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comments"
    }]
})

export default model('Post', postSchema)