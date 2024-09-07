import mongoose from "mongoose";
import { Schema } from "mongoose";

const subjectSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    teacher: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teacher',
        required: true,
    }],
})

export default mongoose.model('Subject', subjectSchema)