import { Student } from "../../mongoDB/models/models";

export default async function postController(req, res) {

    const fromData = req.body;

    console.log(fromData)

    await Student.create(fromData, (err) => {
        if (!err) {
            res.status(200).json({ messege: "Apply Finiesd Successfully" });
        } else {
            res.status(500).json({ error: "There was a server side problem" });
        }
    });

}
