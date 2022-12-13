import Layout from "../../../componnent/Admin/Layout";
import Payment from "../../../componnent/Admin/Payment";
import styles from "../../../styles/Admin/Payments.module.css";

export default function Payments() {
    return (
        <div className={styles.paymentsWrp}>
            <div className={styles.tableHeader}>
                <h1>Make Payment to Teacher</h1>
                <input placeholder="Search" className={styles.input} type='search' />
            </div>

            <Payment />
        </div>
    )
}

Payments.getLayout = function getLayout(page) {
    return <Layout>
        {page}
    </Layout>
}