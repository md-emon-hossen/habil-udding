import getSingleController from "../../../controllers/studentsControllers/singleStudentController/getSingleController";

export default function SingleStudentHandler(req, res) {
    const method = req.method;

    switch (method) {
        case "GET":
            getSingleController(req, res);
            break;
        case "PUT":

            break;
        case "DELETE":

            break;
        default: res.status(405).json({ messege: 'Method Not Allow' })
            break;
    }
}
