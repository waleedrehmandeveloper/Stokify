import mongoose from "mongoose";
import color from "colors";
import dotenv from "dotenv";

dotenv.config();

const Db = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log(color.green("Db Connected!"));
    } catch (error) {
        console.log(color("Database Connection Failed!"));
        console.log(error.message);
    }
};

export default Db;