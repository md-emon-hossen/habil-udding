import { FiDownload } from "react-icons/fi";
import styles from "../../../styles/download.module.css";

export default function index() {
    return (
        <div className={styles.downloadWrp}>
            <h2>Download Your Form</h2>
            <p>for your next uses</p>

            <a href='/ragistration/download' download><FiDownload className={styles.icons} />Download</a>
        </div>
    )
}
