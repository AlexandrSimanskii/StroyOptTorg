import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const signUp = async (req, res, next) => {
  console.log(req.body);
  const { username, email, password, phone, region } = req.body;
  const hashedPassword = bcrypt.hashSync(password, 10);
  const newUser = new User({
    username,
    email,
    phone,
    region,
    password: hashedPassword,
  });

  try {
    const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET);
    await newUser.save();
    const { password, ...rest } = newUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(201)
      .json(rest);
  } catch (error) {
    res.json("сломался")
    next(error);
  }
};

// export const signIn = async (req, res, next) => {
//   const { email, password } = req.body;
//   try {
//     const validUser = await User.findOne({ email });
//     if (!validUser) {
//       return next(errorHandler(404, "Пользователь с такой почтой не найден"));
//     }
//     const validPassword = bcrypt.compareSync(password, validUser.password);
//     if (!validPassword) {
//       return next(errorHandler(401, "Почта и пароль не совпадают"));
//     }
//     const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
//     const { password: pass, ...rest } = validUser._doc;
//     res
//       .cookie("access_token", token, { httpOnly: true })
//       .status(200)
//       .json(rest);
//   } catch (error) {
//     next(error);
//   }
// };

// export const signInWithGoogle = async (req, res, next) => {
//   const { username, password, email, avatar } = req.body;
//   const validUser = await User.findOne({ email });
//   console.log(req.body);
//   if (!validUser) {
//     const hashedPassword = bcrypt.hashSync(password, 10);
//     const newUser = new User({
//       username,
//       email,
//       avatar,
//       password: hashedPassword,
//     });

//     try {
//       await newUser.save();
//       const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET);
//       const { password: pass, ...rest } = newUser._doc;
//       res
//         .cookie("access_token", token, { httpOnly: true })
//         .status(201)
//         .json(rest);
//     } catch (error) {
//       console.log(error);

//       next(error);
//     }
//   } else {
//     try {
//       const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
//       const validPassword = bcrypt.compareSync(password, validUser.password);
//       const { password: pass, ...rest } = validUser._doc;
//       res
//         .cookie("access_token", token, { httpOnly: true })
//         .status(200)
//         .json(rest);
//     } catch (error) {
//       next(error);
//     }
//   }
// };

// export const signOut = async (req, res, next) => {
//   try {
//     res
//       .clearCookie("access_token")
//       .status(200)
//       .json("Пользователь вышел с аккаунта");
//   } catch (error) {
//     next(error);
//   }
// };
