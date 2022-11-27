import styles from "../styles/Header.module.css";
import LogoName from "./LogoName";
import Navber from "./Navber";


export default function Header() {
    return (
        <div className={styles.headerWrp}>
            <div className={styles.headerContainer}>
                <LogoName />
                <Navber />
            </div>
        </div>
    )
}