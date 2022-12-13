import AllTtable from "../../../componnent/Admin/AllTtable";
import Layout from "../../../componnent/Admin/Layout";
import styles from "../../../styles/Admin/Allstudents.module.css";

export default function AllTeachers() {
    return (

        <div className={styles.Swrp}>
            <div className={styles.tableHeader}>
                <h1> All Teachers</h1>
                <input placeholder="Search" className={styles.input} type='search' />
            </div>
            <AllTtable />
        </div>
    )
}


AllTeachers.getLayout = function getLayout(page) {
    return <Layout>
        {page}
    </Layout>
}