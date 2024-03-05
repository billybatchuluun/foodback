import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";
import { connectToDb } from "./connectToDb";
import router from "./routes/authRoutes";
import cookieParser from "cookie-parser";
import authRouter from "./routes/authRoutes";
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
