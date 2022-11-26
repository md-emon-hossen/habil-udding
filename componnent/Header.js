import LogoName from "./LogoName";
import Navber from "./Navber";
import styles from "../styles/Header.module.css";


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
