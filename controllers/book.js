import Book from "../models/Book.js";

export const createBook = async (req, res, next) => {
    const newBook = new Book(req.body)
    try {
        const savedBook = await newBook.save();
        res.status(200).json(savedBook);
    } catch (error) {
        next(error)
    }
}

export const updateBook = async (req, res, next) => {
    try {
        const updatedBook = await Book.findByIdAndUpdate(req.params.id, {$set: req.body})
        res.status(200).json(updatedBook)
    } catch (error) {
        next(error)
    }
}

export const deleteBook = async (req, res, next) => {
    try {
        await Book.findByIdAndDelete(req.params.id)
        res.status(200).json('The book has been deleted!');
    } catch (error) {
        next(error)
    }
}

export const getBook = async (req, res, next) => {
    try {
        const book = await Book.findById(req.params.id)
        res.status(200).json(book);
    } catch (error) {
        next(error)
    }
}

export const getAllBooks = async (req, res, next) => {
    try {
        const books = await Book.find()
        res.status(200).json(books);
    } catch (error) {
        next(error)
    }
}