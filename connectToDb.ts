import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const mongoUri = process.env.MONGODB_URI as string
export const connectToDb = async () => {
    try {
        await mongoose.connect(mongoUri)
    } catch (error) {
        console.error(error)
    }
}