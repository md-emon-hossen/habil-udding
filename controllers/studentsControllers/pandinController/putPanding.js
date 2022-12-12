import { Student } from "../../../mongoDB/models/models";
export default async function putPending(req, res) {

    const { id, sttus } = req.body;
    const sendData = {
        status: sttus
    }

    await Student.findByIdAndUpdate(id, sendData, (err, data) => {
        if (!err) {
            res.status(200).json({ messege: "Add Student Successfully" });
        } else {
            res.status(500).json({ error: "There was a server side Error" });
        }
    });


}