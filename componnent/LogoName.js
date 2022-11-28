import Image from "next/image";
import logo from '../public/logo.png';
import styles from "../styles/LogoName.module.css";

export default function LogoName() {
    return (
        <div className={styles.logonameWrp}>

            <div className={styles.logo}>
                <Image src={logo} alt="Logo" />
            </div>
            <div className={styles.name}>
                <h3>Hazi Habil Uddin Ideal Academy</h3>
            </div>
        </div>
    )
}

