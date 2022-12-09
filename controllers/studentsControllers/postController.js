import { Student } from "../../mongoDB/models/models";

export default async function postController(req, res) {

    const { name, age } = req.body;
    const formData = { name, age };

    await Student.create(formData, (err) => {
        if (!err) {
            res.status(200).json({ messege: "Student Added Successfully" });
        } else {
            res.status(500).json({ error: "There was a server side problem" });
        }
    });

}
