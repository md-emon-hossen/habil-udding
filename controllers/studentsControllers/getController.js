import { Student } from "../../mongoDB/models/models";

export default async function getController(req, res) {


    await Student.find({}, (err, data) => {
        if (!err) {
            const returnData = data.filter(item => item.status === true);
            res.status(200).json(returnData);
        } else {
            res.status(500).json({ error: "There was a server side problem" });
        }
    }).clone();
}
