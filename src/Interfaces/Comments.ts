import { Types } from "mongoose"

export interface Comments {
    description: string
    user: {
        name: string,
        lastname: string,
        faculty: string,
        career: string
    }
    idPost: Types.ObjectId
    like?: number
    noLike?: number
    commentTime: Date
}