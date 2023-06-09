import express from "express";
import Router from "Router";
import { getAllMentors, addMentor } from "../Services/mentor.service.js";
const router = express.Router();

router.get("/", async function (request, response) {
  const result = await getAllMentors();
  response.send(result);
});

router.post("/addMentor", async function (request, response) {
  const data = request.body;
  const result = await addMentor(data);
  response.send(result);
});

export default router;
