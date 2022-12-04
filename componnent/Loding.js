import styles from "../styles/Loding.module.css";

export default function Loding() {
    return (
        <div className={styles.loadingWrp}>
            <div className={styles.loader}>
                <div className={styles.wrpDiv}></div>
                <div className={styles.book__pg}></div>
                <div className={`${styles.book__pg}${styles.two}`}></div>
                <div className={`${styles.book__pg}${styles.three}`}></div>
                <div className={`${styles.book__pg}${styles.four}`}></div >
                <div className={`${styles.book__pg}${styles.five}`}></div>
            </div >
        </div >
    )
}
