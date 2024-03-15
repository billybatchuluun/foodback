import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import { connectToDb } from "./connectToDb";
import router from "./routes/authRoutes";
import cookieParser from "cookie-parser";
import authRouter from "./routes/authRoutes";
import { checkUser } from "./controller/authController";
import { Request, Response } from "express";
import Food from "./models/foods";
// import {verifyToken} from "./middleware/verify";

const app = express();
connectToDb();

const PORT = 8080;
app.use(cors());
app.use(express.json());
app.use(authRouter);
// app.listen(PORT, () => {
//     console.log("http://localhost:" + PORT);
// })

app.listen(PORT, () => {
  console.log("Application running at http://localhost:" + PORT);
});

app.get("/getFoods", async (req: Request, res: Response) => {
  try {
    const foods = await Food.find({});
    console.log(foods);
    return res.status(200).send(foods);
  } catch (error) {
    console.error("error in getFoods", error);
  }
});

app.post("/login", (req: Request, res: Response) => {
  checkUser(req, res);
});
module.exports = app;
