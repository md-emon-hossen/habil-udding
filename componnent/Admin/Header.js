import styles from "../../styles/Admin/Header.module.css";
import LogoName from "../LogoName";
import Profile from "./Profile";

export default function Header() {
    return (
        <div className={styles.headerWrp}>
            <div className={styles.headerContainer}>
                <LogoName />
                <Profile />
            </div>
        </div>
    )
}
