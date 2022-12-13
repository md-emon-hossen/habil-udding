import styles from "../../styles/Admin/Payment.module.css";
import PaymentInput from "./PaymentInput";

export default function Payment() {
    return (
        <div className={styles.paymentWrp}>
            <div>add or thick</div>
            <div className={styles.makePayWrp}>
                <div className={styles.paymentFiledWrper}>
                    <div> Title :</div>
                    <div> Quentity :</div>
                    <div> Fee :</div>
                    <div> Total :</div>
                </div>
                <PaymentInput />
                <PaymentInput />
                <PaymentInput />
                <PaymentInput />
                <PaymentInput />
                <PaymentInput />
            </div>
        </div>
    )
}
