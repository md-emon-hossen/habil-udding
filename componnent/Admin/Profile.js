import { BiMessageAltDetail } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import styles from "../../styles/Admin/Profile.module.css";

export default function Profile() {
    return (
        <div className={styles.profileWrp}>
            <div>
                < IoIosNotifications className={styles.icons} />
            </div>
            <div>
                <BiMessageAltDetail className={styles.icons} />
            </div>
            <div>

                <FaUserCircle className={styles.icons} />
            </div>
        </div>
    )
}
