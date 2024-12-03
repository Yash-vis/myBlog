import mongoose from "mongoose";
export const connectdb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Connected")
    } catch (error) {
        console.log('Error !')
    }
}