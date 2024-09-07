import Teacher from "../models/Teacher.js";

export const createTeacher = async (req, res, next) => {
    const newTeacher = new Teacher({...req.body, userId: req.params.id})
    try {
        const savedTeacher = await newTeacher.save();
        res.status(200).json(savedTeacher);
    } catch (error) {
        next(error)
    }
}

export const updateTeacher = async (req, res, next) => {
    try {
        const updatedTeacher = await Teacher.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(updatedTeacher)
    } catch (error) {
        next(error)
    }
}

export const deleteTeacher = async (req, res, next) => {
    try {
        await Teacher.findByIdAndDelete(req.params.id)
        res.status(200).json('The Teacher has been deleted!');
    } catch (error) {
        next(error)
    }
}

export const getTeacher = async (req, res, next) => {
    try {
        const teacher = await Teacher.findById(req.params.id)
        res.status(200).json(teacher);
    } catch (error) {
        next(error)
    }
}

export const getAllTeachers = async (req, res, next) => {
    try {
        const teachers = await Teacher.find()
        res.status(200).json(teachers);
    } catch (error) {
        next(error)
    }
}