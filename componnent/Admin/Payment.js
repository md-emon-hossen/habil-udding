import { useState } from "react";
import styles from "../../styles/Admin/Payment.module.css";
import PaymentInput from "./PaymentInput";

export default function Payment() {

    const [add, setadd] = useState(1);

    function handleAdd() {
        setadd((prev) => {
            return prev + 1
        })
    }

    function handleMains() {
        setadd((prev) => {
            return prev - 1
        })
    }

    const item = [];

    for (var i = 0; i < add; i++) {
        item.push(<PaymentInput />)
    }

    return (
        <div className={styles.paymentWrp}>
            <div>
                <div className={styles.corospondingStudentWrp}>
                    <div className={styles.corospondingStudent}>
                        <div>Id</div>
                        <div>Name</div>
                        <div>Father Name</div>
                        <div>Class</div>
                        <div>Due</div>
                    </div>
                    <div className={styles.corospondingStudent}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
            <div className={styles.makePayWrp}>
                <div className={styles.paymentFiledWrper}>
                    <div> Title :</div>
                    <div> Quentity :</div>
                    <div> Fee :</div>
                    <div> Total :</div>
                </div>

                {item}
                <div className={styles.btn}>
                    <button onClick={handleAdd}>+</button>
                    <button onClick={handleMains}>-</button>
                </div>
            </div>
        </div>
    )
}
