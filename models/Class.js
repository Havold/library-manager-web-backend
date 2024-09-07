import mongoose from "mongoose";
import { Schema } from "mongoose";
import Student from "./Student.js";

const classSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    grade: {
        type: Number,
        required: true,
        enum: [10, 11, 12],
    },
    students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
    }],
    maxStudents: {
        type: Number,
        default: 40,
    }
})

export default mongoose.model('Class', classSchema)