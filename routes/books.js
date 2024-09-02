import { Router } from "express";
import Book from "../models/Book.js";
import { createError } from "../utils/error.js";
import { createBook, deleteBook, getAllBooks, getBook, updateBook } from "../controllers/book.js";

const router = Router();

// CREATE
router.post('/', createBook)

// UPDATE
router.put('/:id', updateBook)

// DELETE
router.delete('/:id', deleteBook)

// GET
router.get('/:id', getBook)

// GET ALL
router.get('/', getAllBooks)

export default router