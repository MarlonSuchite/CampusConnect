import {Schema, model} from "mongoose";
import { User } from "../Interfaces/User";

const userSchema = new Schema<User>({
    license: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    lastname:{
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    faculty: {
        type: String,
        required: true
    },
    career: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    rol: String,
})

export default model('Users', userSchema)