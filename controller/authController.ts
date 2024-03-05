import User from "../models/user";
import { Request, Response } from "express";
// import bcrypt from "bcrypt";
import bcrypt from "bcrypt";
import { request } from "http";

export const signUp = async (req: Request, res: Response) => {
  const { name, email, password, address, role } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const createUser = await User.create({
      name,
      email,
      password: hashedPassword,
      address,
      role,
    });
    res
      .status(201)
      .json({ message: `${createUser.email}user create succesfull` });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: "User creation failed" });
  }
};
