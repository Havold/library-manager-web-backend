import mongoose from "mongoose";
import { Schema } from "mongoose";

const teacherSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    dob: {
        type: Date,
        required: true,
    },
    subject: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Subject',
    }],
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    classes: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Class',
    }]
})

export default mongoose.model('Teacher', teacherSchema)