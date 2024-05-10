import { Router } from "express";
import { getAllUsers, getUser, login, newUser, updateUser } from "./users.controller";
import { existToken, isAdmin } from "../middelware/auth";

//Creacion de un enrutador
const router = Router();

router.post('/newUser', newUser)
router.post('/login', login)
router.get('/getAllUsers', getAllUsers)
router.get('/getUser/:id', getUser)
router.put('/updateUser/:id', updateUser)

export default router

