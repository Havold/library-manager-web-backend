import { Router } from "express";
import { createError } from "../utils/error.js";
import { createClass, updateClass, deleteClass, getClass, getAllClasses } from "../controllers/class.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = Router();

// CREATE
router.post('/', verifyAdmin, createClass)

// UPDATE
router.put('/:id', verifyAdmin, updateClass)

// DELETE
router.delete('/:id', verifyAdmin, deleteClass)

// GET
router.get('/:id', getClass)

// GET ALL
router.get('/', getAllClasses)

export default router