// import { Student } from "../../mongoDB/models/models";

export default async function getController(req, res) {


    console.log(req);
    res.status(200).json({ check: "ok" });




    // await Student.find((err, data) => {
    //     if (!err) {
    //         res.status(200).json(data);
    //     } else {
    //         res.status(500).json({ error: "There was a server side problem" });
    //     }
    // });
}
