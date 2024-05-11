import { Types } from "mongoose"

export interface Post{
    description: string
    category: string
    image?: string
    anonymous: boolean
    date: Date
    user: Types.ObjectId
    comments?: Types.Array<Types.ObjectId>
}