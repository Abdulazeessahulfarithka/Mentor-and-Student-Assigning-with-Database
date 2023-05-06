import { client } from "../index.js";

export async function getAllMentors() {
    return await client
        .db("studentmentor")
        .collection("getallmentor")
        .find({})
        .toArray();
}
export async function addMentor(data) {
    return await client
        .db("studentmentor")
        .collection("addmentor")
        .insertOne(data);
}