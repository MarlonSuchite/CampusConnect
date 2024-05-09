import { Router } from "express";
import { newUser } from "./users.controller";

//Creacion de un enrutador
const router = Router();

router.post('/newUser', newUser)

export default router

