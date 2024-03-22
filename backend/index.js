import express from "express";
import dotenv from "dotenv";
import databaseConnection from "./config/database.js";

dotenv.config({
  path: ".env",
});

databaseConnection();
const app = express();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(PORT, () => {
  console.log(`Server listen at post ${PORT}`);
});
