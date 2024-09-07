import User from "../models/User.js";
import bcrypt from "bcryptjs";
import { createError } from "../utils/error.js";
import jwt from "jsonwebtoken";

export const register = async (req, res, next) => {
  try {
    var salt = bcrypt.genSaltSync(10);
    var hashPwd = bcrypt.hashSync(req.body.password, salt);

    const newUser = new User({
      username: req.body.username,
      email: req.body.email,
      password: hashPwd,
      isAdmin: req.body.isAdmin,
      isTeacher: req.body.isTeacher,
    });

    await newUser.save();
    res.status(200).send("New user has been created!");
  } catch (error) {
    next(error);
  }
};

export const login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return next(createError(404, "User not found!"));
    }

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) {
      return next(createError(400, "Invalid user or password!"));
    }

    const token = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin, isTeacher: user.isTeacher },
      process.env.JWT
    );

    const { password, isAdmin, ...otherDetails } = user._doc;

    res
      .cookie("access_token", token, {
        httpOnly: true, // Chỉ định rằng cookie chỉ có thể truy cập được thông qua HTTP(S) và không không thể truy cập được từ JavaScript từ phía client.
      })
      .status(200)
      .json(otherDetails);
  } catch (error) {
    next(error);
  }
};
