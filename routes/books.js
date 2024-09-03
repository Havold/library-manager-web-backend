import { Router } from "express";
import Book from "../models/Book.js";
import { createError } from "../utils/error.js";
import { createBook, deleteBook, getAllBooks, getBook, updateBook } from "../controllers/book.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = Router();

// CREATE
router.post('/', verifyAdmin, createBook)

// UPDATE
router.put('/:id', verifyAdmin, updateBook)

// DELETE
router.delete('/:id', verifyAdmin, deleteBook)

// GET
router.get('/:id', getBook)

// GET ALL
router.get('/', getAllBooks)

export default router