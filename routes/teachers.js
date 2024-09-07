import { Router } from "express";
import { createError } from "../utils/error.js";
import { createTeacher, deleteTeacher, getAllTeachers, getTeacher, updateTeacher } from "../controllers/teacher.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = Router();

// CREATE INFO Teacher
router.post('/:id', verifyUser, createTeacher)

// UPDATE
router.put('/:id', verifyAdmin, updateTeacher)

// DELETE
router.delete('/:id', verifyAdmin, deleteTeacher)

// GET
router.get('/:id', getTeacher)

// GET ALL
router.get('/', getAllTeachers)

export default router