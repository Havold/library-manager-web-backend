import { Router } from "express";
import { createError } from "../utils/error.js";
import { createStudent, deleteStudent, getAllStudents, getStudent, updateStudent } from "../controllers/student.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";

const router = Router();

// CREATE INFO STUDENT
router.post('/:id', verifyUser, createStudent)

// UPDATE
router.put('/:id', verifyAdmin, updateStudent)

// DELETE
router.delete('/:id', verifyAdmin, deleteStudent)

// GET
router.get('/:id', getStudent)

// GET ALL
router.get('/', getAllStudents)

export default router