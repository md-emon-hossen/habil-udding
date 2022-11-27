import Notic from "../componnent/Notic";
import TrandToday from "../componnent/TrandToday";
import styles from "../styles/Notice.module.css";


export default function Notice() {
    return (
        <div className={styles.container}>
            <div className={styles.notice}>
                <TrandToday clasname={true} />
                <Notic />
            </div>
        </div>
    )

}