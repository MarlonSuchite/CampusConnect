import { Router } from "express";
import { login, newUser } from "./users.controller";
import { existToken, isAdmin } from "../middelware/auth";

//Creacion de un enrutador
const router = Router();

router.post('/newUser',existToken, isAdmin, newUser)
router.post('/login', login)

export default router

