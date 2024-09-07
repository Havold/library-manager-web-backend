import Student from "../models/Student.js";
import Teacher from "../models/Teacher.js";
import User from "../models/User.js";

// UPDATE
export const updateUser = async (req, res, next) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(updatedUser);
  } catch (error) {
    next(error);
  }
};

// DELETE
export const deleteUser = async (req, res, next) => {
  const userId = req.params.id;
  try {
    await Teacher.deleteMany({ userId });
    await Student.deleteMany({ userId });
    await User.findByIdAndDelete(userId);
    res.status(200).json("The user has been deleted!");
  } catch (error) {
    next(error);
  }
};

// GET
export const getUser = async (req, res, next) => {
  const userId = req.params.id;
  try {
    // 1. Tìm người dùng
    // const user = await User.findById(userId)

    // 2. Tìm các thông tin liên quan
    const teacherInfo = await Teacher.findOne({ userId: userId }).populate(
      "userId"
    );
    const studentInfo = await Student.findOne({ userId: userId })
      .populate("userId")
      .populate("classId")
      .populate({ path: "scores.subject", model: "Subject" });

    // 3. Trả về thông tin người dùng cùng với thông tinl liên quan
    res.status(200).json({
      teacher: teacherInfo || null, // Có thể không có thông tin giáo viên
      student: studentInfo || null, // Có thể không có thông tin học sinh
    });
  } catch (error) {
    next(error);
  }
};

// GET ALL
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    next(error);
  }
};
