import Class from "../models/Class.js";

export const createClass = async (req, res, next) => {
    const newClass = new Class(req.body)
    try {
        const savedClass = await newClass.save();
        res.status(200).json(savedClass);
    } catch (error) {
        next(error)
    }
}

export const updateClass = async (req, res, next) => {
    try {
        const updatedClass = await Class.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(updatedClass)
    } catch (error) {
        next(error)
    }
}

export const deleteClass = async (req, res, next) => {
    try {
        await Class.findByIdAndDelete(req.params.id)
        res.status(200).json('The Class has been deleted!');
    } catch (error) {
        next(error)
    }
}

export const getClass = async (req, res, next) => {
    try {
        const _class = await Class.findById(req.params.id)
        res.status(200).json(_class);
    } catch (error) {
        next(error)
    }
}

export const getAllClasses = async (req, res, next) => {
    try {
        const classes = await Class.find()
        res.status(200).json(classes);
    } catch (error) {
        next(error)
    }
}