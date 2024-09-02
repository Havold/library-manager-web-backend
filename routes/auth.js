import { Router } from "express";
import { login, register } from "../controllers/auth.js";

const router = Router()

// REGISTER
router.post('/register', register)

// LOGIN
router.post('/login', login)

export default router