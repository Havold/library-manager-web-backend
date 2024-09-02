import { Router } from "express";
import { getAllUsers } from "../controllers/user.js";

const router = Router()

// CREATE

// UPDATE
// DELETE
// GET
// GET ALL
router.get('/', getAllUsers)

export default router