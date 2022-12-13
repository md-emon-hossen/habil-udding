import Layout from "../../../componnent/Admin/Layout";
import Payment from "../../../componnent/Admin/Payment";
import styles from "../../../styles/Admin/Payments.module.css";

export default function Payments() {
    return (
        <div className={styles.paymentsWrp}>
            <div className={styles.tableHeader}>
                <h1>Make Payment to Student</h1>
                <input placeholder="Search" className={styles.input} type='search' />
            </div>

            <Payment />

            <div className={styles.paymentBtn}>
                <div>
                    <button className={styles.makePayemtn}>Make Payment</button>
                </div>
                <div className={styles.filed}>
                    Total =
                </div>
            </div>
        </div>
    )
}

Payments.getLayout = function getLayout(page) {
    return <Layout>
        {page}
    </Layout>
}