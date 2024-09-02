import mongoose from "mongoose";
import { Schema } from "mongoose";

const UserSchema = new Schema({
    username: {
        type: String,
        require: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    isAdmin: {
        type: Boolean,
        default: false,
    },
}, {timestamps: true})

export default mongoose.model('User', UserSchema)