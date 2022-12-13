import styles from "../styles/Loding.module.css";

export default function Loding() {
    return (
        <div className={styles.loadingWrp}>
            <div className={styles.lodingItemWrp}>
                <div class={styles.bounceball}></div>
                <div class={styles.text}>NOW LOADING</div>
            </div>
        </div >
    )
}

