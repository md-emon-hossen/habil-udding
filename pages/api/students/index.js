import deleteController from "../../../controllers/studentsControllers/deleteController";
import getController from "../../../controllers/studentsControllers/getController";
import postController from "../../../controllers/studentsControllers/postController";
import putController from "../../../controllers/studentsControllers/putController";
import connectDb from "../../../mongoDB/connectDb";

export default function studentsHandler(req, res) {
    connectDb();
    const method = req.method;
    switch (method) {
        case "GET":
            getController(req, res);
            break;
        case "POST":
            postController(req, res);
            break;
        case "PUT":
            putController(req, res);
            break;
        case "DELETE":
            deleteController(req, res);
            break;
        default: res.status(405).json({ messege: 'Method Not Allow' })
            break;
    }

}
