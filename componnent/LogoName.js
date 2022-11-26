import styles from "../styles/LogoName.module.css";
import Image from "next/image";
import logo from '../public/logo.png'

export default function LogoName() {
    return (
        <div className={styles.logonameWrp}>

            <div class={styles.logo}>
                <Image src={logo}/>
            </div>
            <div class={styles.name}>
                <h3>Hazi Habil Uddin Ideal Academy</h3>
            </div>
        </div>
    )
}

