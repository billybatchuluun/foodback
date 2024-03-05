import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const mongoUri = process.env.MONGODB_URI as string
export const connectToDb = async () => {
    try {
        await mongoose.connect(mongoUri)
        console.log("successfully connect to mongoDB");
    } catch (error) {
        console.error(error)
    }
}