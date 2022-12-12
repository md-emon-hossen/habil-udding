import { Student } from "../../../mongoDB/models/models";
export default async function deletePending(req, res) {

    const { id } = req.body;


    await Student.findByIdAndDelete({ _id: id }, (err) => {
        if (!err) {
            res.status(200).json({ messege: "Delete Student Successfully" });
        } else {
            res.status(500).json({ error: "There was a server side Error" });
        }
    });


}