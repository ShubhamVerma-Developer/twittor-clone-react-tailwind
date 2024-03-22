import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({
  path: "../backend/.env",
});

const mongoUri = process.env.MONGO_URI;

const databaseConnection = () => {
  mongoose
    .connect(mongoUri)
    .then(() => {
      console.log("connected to mongoDB");
    })
    .catch((error) => {
      console.log(error);
    });
};

export default databaseConnection;
