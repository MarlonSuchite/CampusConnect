import { Router } from "express";
import { createPost, getAllPost } from "./post.controller";
import { existToken } from "../middelware/auth";
const router = Router()

router.post('/createPost',existToken,createPost)
router.get('/getAllPost', getAllPost)

export default router
