import Link from "next/link";
import styles from "../styles/SingleLogin.module.css";

export default function SingleLogin({ title, FildOne, fildTwo, buttonTitle }) {
    return (
        <div className={styles.loginWRp}>
            <h2 className={styles.h2}>{title}</h2>
            <input className={styles.input} placeholder={FildOne} type={FildOne} />
            <input className={styles.input} placeholder={fildTwo} type={fildTwo} />
            <button className={styles.button}>{buttonTitle}</button>

            <Link className={styles.forgetpass} href="/reset">Forget Password</Link>
        </div>
    )
}