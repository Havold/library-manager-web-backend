import mongoose from "mongoose";
import { Schema } from "mongoose";

const BookSchema = new Schema({
    title: {
        type: String,
        require: true,
    },
    originalTitle: {
        type: String,
        require: true,
    },
    releaseDate: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    pages: {
        type: Number,
        require: true,
    },
    cover: {
        type: String,
        require: true,
    },
    rating: {
        type: Number,
        min: 0,
        max: 5,
    }
})

export default mongoose.model('Book', BookSchema)