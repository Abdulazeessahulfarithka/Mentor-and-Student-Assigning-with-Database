import { client } from "../index.js";

export async function getAllStudents() {
  return await client
    .db("studentmentor")
    .collection("getstudent")
    .find({})
    .toArray();
}

export async function addStudent(data) {
  return await client
    .db("studentmentor")
    .collection("addstudent")
    .insertOne(data);
}
export async function assignMentor(data) {
  console.log(data);
  return await client
    .db("studentmentor")
    .collection("assignmentor")
    .updateOne({ _id: data.studentId }, { $set: { mentorId: data.mentorId } });
}
export async function assignMentorToMany(data) {
  const { studentIds, mentorId } = data;
  return await client
    .db("studentmentor")
    .collection("assignmentormany")
    .updateMany({ _id: { $in: studentIds } }, { $set: { mentorId: mentorId } });
}

export async function ChangeMentorForStudent(data) {
  const { studentId, mentorId } = data;
  return await client
    .db("studentmentor")
    .collection("changementor")
    .updateOne({ _id: studentId }, { $set: { mentorId: mentorId } });
}
