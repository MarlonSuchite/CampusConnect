import { Router } from "express";
import { createComment } from "./comments.controller";
import { existToken } from "../middelware/auth";

const router = Router()

router.post('/createComment', existToken, createComment)



export default router
