import Student from "../models/Student.js";

export const createStudent = async (req, res, next) => {
    const newStudent = new Student({...req.body, userId: req.params.id})
    try {
        const savedStudent = await newStudent.save();
        res.status(200).json(savedStudent);
    } catch (error) {
        next(error)
    }
}

export const updateStudent = async (req, res, next) => {
    try {
        const updatedStudent = await Student.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true})
        res.status(200).json(updatedStudent)
    } catch (error) {
        next(error)
    }
}

export const deleteStudent = async (req, res, next) => {
    try {
        await Student.findByIdAndDelete(req.params.id)
        res.status(200).json('The Student has been deleted!');
    } catch (error) {
        next(error)
    }
}

export const getStudent = async (req, res, next) => {
    try {
        const student = await Student.findById(req.params.id)
        res.status(200).json(student);
    } catch (error) {
        next(error)
    }
}

export const getAllStudents = async (req, res, next) => {
    try {
        const students = await Student.find()
        res.status(200).json(students);
    } catch (error) {
        next(error)
    }
}