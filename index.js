import express from "express";
import dotenv from "dotenv";
import { MongoClient } from "mongodb";
import studentRouter from "./Routes/student.route.js";
import mentorRouter from "./Routes/mentor.route.js";

dotenv.config();
const app = express();
const PORT = 5000;

//connect mongo
const URL = process.env.MONGO_URL;

export const client = new MongoClient(URL);
client.connect();
console.log("mongoDB connected");

app.use(express.json());
app.get("/", async function (request, response) {
  response.send("<h1>Student Mentor Task<h1/>");
});
app.use("/students", studentRouter);
app.use("/mentors", mentorRouter);
app.listen(PORT, () => console.log("server started in port 🎉🎉🎉", PORT));
