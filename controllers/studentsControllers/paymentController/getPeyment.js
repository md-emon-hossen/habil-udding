import { Student } from "../../../mongoDB/models/models";

export default async function getPayment(req, res) {

    const { id } = req.query;

    await Student.find({ fName: id }, (err, data) => {
        if (!err) {
            res.status(200).json(data);
        } else {
            res.status(500).json({ error: "There was a server side problem" });
        }
    }).clone();
}
