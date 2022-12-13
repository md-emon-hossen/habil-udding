import styles from "../../styles/Admin/PaymentInput.module.css";

export default function PaymentInput() {
    return (
        <div className={styles.paymentInputWrp} >
            <div className={styles.paymentFiledWrper}>
                <div>
                    <select className={styles.filed}>
                        <option className={styles.option}>Selete one</option>
                        <option className={styles.option}>Monthly Fee</option>
                        <option className={styles.option}>Exam Fee</option>
                        <option className={styles.option}>Section Fee</option>
                    </select>
                </div>
                <div>
                    <input className={styles.filed} type="Number" />
                </div>
                <div>
                    <input className={styles.filed} type="Number" />
                </div>
                <div>
                    <input className={styles.filed} type="Number" />
                </div>
            </div>
        </div>
    )
}
