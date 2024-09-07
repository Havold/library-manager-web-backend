import mongoose from "mongoose";
import { Schema } from "mongoose";

const studentSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    classId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class',
    },
    scores: [{
        subject: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Subject',
        },
        semester: {
            type: String,
            enum: ['I', 'II'],
        },
        score: {
            type: Number,
            min: 0,
            max: 10,
        }
    }]
});

export default mongoose.model('Student', studentSchema)