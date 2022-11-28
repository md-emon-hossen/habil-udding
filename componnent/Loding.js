import styles from "../styles/Loding.module.css";

export default function Loding() {
    return (
        <div className={styles.loadingWrp}>
            <div className={styles.loader}>Loading...</div>
        </div>
    )
}
