
import { useState } from "react";
import { TiTick } from "react-icons/ti";
import styles from "../../styles/Admin/Payment.module.css";
import PaymentInput from "./PaymentInput";

export default function Payment({ data }) {



    const [add, setadd] = useState(1);
    const [tickController, settickController] = useState(false);


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
                        <div>Class</div>
                        <div>Due</div>
                        <div>Add To Payment</div>
                    </div>
                    <div className={styles.corospondingStudent}>
                        <div>{data && data[0].customid}</div>
                        <div>{data && data[0].fName}</div>
                        <div>{data && data[0].faterName}</div>
                        <div></div>
                        <div>
                            {data && <button onClick={() => settickController(!tickController)} className={`${styles.addTickWrp} ${tickController && styles.addTickController}`}><TiTick className={styles.addTick} /></button>}
                        </div>
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
