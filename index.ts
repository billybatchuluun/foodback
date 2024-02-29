import express from "express"
import cors from "cors"
import bcrypt from "bcrypt"
import { connectToDb } from "./connectToDb";

const app = express()
connectToDb()

const PORT = 8080;
app.use(cors())
app.use(express.json())
// app.listen(PORT, () => {
//     console.log("http://localhost:" + PORT);
// })
app.post("/signup", async (req, res) => {
    try {
      console.log(req.body);

    } catch (error) {
      console.error(error);
    }
  
    res.status(201).send({ message: "Successfully created" });
  });
  
  app.listen(PORT, () => {
    console.log("Application running at http://localhost:" + PORT);
  });