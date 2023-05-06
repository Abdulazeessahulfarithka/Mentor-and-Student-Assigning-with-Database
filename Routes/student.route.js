import express from "express";
import { ObjectId } from "mongodb";
import {
  getAllStudents,
  addStudent,
  assignMentor,
  assignMentorToMany,
  ChangeMentorForStudent,
} from "../Services/Student.service.js";
const router = express.Router();

router.get("/", async function (request, response) {
  const result = await getAllStudents();
  response.send(result);
});

router.post("/addstudent", async function (request, response) {
  try {
    const data = request.body;
    console.log(data);
    const result = await addStudent(data);
    response.send(result);
  } catch (error) {
    console.error(error);
    response.status(500).send("An error occurred while adding the student.");
  }
});

router.post("/assignMentor", async function (request, response) {
  const { studentId, mentorId } = request.body;

  const result = await assignMentor({
    studentId: ObjectId(studentId),
    mentorId: ObjectId(mentorId),
  });
  response.send(result);
});
router.post("/assignMentorToMany", async function (request, response) {
  const { studentIds, mentorId } = request.body;
  const studentObjectIds = studentIds.map((studentId) => ObjectId(studentId));
  console.log(studentObjectIds);
  const result = await assignMentorToMany({
    studentIds: studentObjectIds,
    mentorId: ObjectId(mentorId),
  });
  response.send(result);
});

router.put("/changementor/:id", async function (request, response) {
  const { id } = request.params;
  const { mentorId } = request.body;
  const result = await ChangeMentorForStudent({
    studentId: ObjectId(id),
    mentorId: ObjectId(mentorId),
  });
  response.send(result);
});

export default router;
