import { useRouter } from "next/router";
import styles from "../../styles/SingleLogin.module.css";

export default function Reset() {

    const router = useRouter();

    function handleReset() {
        router.push("/reset/varify");
    }
    return (
        <div className={styles.loginWRp}>
            <h2 className={styles.h2}>Reset Password</h2>
            <input className={styles.input} placeholder="Enter Your Email" type="email" />
            <button onClick={handleReset} className={styles.button}>Reset</button>
        </div>
    )
}
