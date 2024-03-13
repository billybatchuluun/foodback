import User from "../models/user";

import { Request, Response } from "express";

import bcrypt from "bcrypt";
import { request } from "http";

export const signUp = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
    const emailMatchUser = await User.findOne({ email: email });
    if (emailMatchUser) {
      return res.status(403).json({ msg: "User already exist" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name: name,
      email: email,
      password: hashedPassword,
      phoneNumber: 99999990,
      role: "User",
      avatarImg: "",
    });
    console.log(user);
    return res.status(201).json({ message: "Successfully created" });
  } catch (error) {
    console.error("error in createUser", error);
    return res.status(400).json({ message: "Failed to create user" });
  }
};
