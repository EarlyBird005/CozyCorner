import mongoose from "mongoose";
import "dotenv/config";

export const connectDB = async () => {
    try {
        const connectionObject = await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`, )  
        console.log(`Database connected`);
        // console.log(`Database connected \t${connectionObject.connection.host}`); // when using mongodb atlas
    } catch (error) {
        console.log("MongoDB connection error", error);
        process.exit(1);
    }
}