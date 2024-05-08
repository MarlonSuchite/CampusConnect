import { Router } from "express";
import { newUser } from "./users.controller";
const router = Router();

router.post('/newUser', newUser)

export default router

