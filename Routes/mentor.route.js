import express from "express";
import { getAllMentors, addMentor } from "../Services/mentor.service.js";
const router = express.Router();

router.get("/", async function (request, response) {
    const result = await getAllMentors();
    response.send(result);
});

router.post("/addmentor", async function (request, response) {
    const data = request.body;
    const result = await addMentor(data);
    response.send(result);
});

export default router;