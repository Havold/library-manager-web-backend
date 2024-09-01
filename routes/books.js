import { Router } from "express";
import Book from "../models/Book.js";
import { createError } from "../utils/error.js";

const router = Router();

// CREATE
router.post('/', async (req,res) => {
    const newBook = new Book(req.body)
    try {
        const savedBook = await newBook.save();
        res.status(200).json(savedBook);
    } catch (error) {
        res.status(500).json(error)
    }

})

// UPDATE
router.put('/:id', async (req, res) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, {$set: req.body})
        res.status(200).json(updatedBook)
    } catch (error) {
        res.status(500).json(error)
    }
})

// DELETE
router.delete('/:id', async (req, res) => {
    try {
        await Book.findByIdAndDelete(req.params.id)
        res.status(200).json('The book has been deleted!');
    } catch (error) {
        res.status(500).json(error)
    }
})

// GET
router.get('/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id)
        res.status(200).json(book);
    } catch (error) {
        res.status(500).json(error)
    }
})

// GET ALL
router.get('/', async (req, res, next) => {

    const failed = true;
    if (failed) {
        return next(createError(401, 'You are not authenticated!'))
    }

    try {
        const books = await Book.find()
        res.status(200).json(books);
    } catch (error) {
        res.status(500).json(error)
    }
})

export default router