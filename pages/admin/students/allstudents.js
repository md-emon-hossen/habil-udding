import AllstTable from "../../../componnent/Admin/AllstTable";
import Layout from "../../../componnent/Admin/Layout";
import styles from "../../../styles/Admin/Allstudents.module.css";


export default function Allstudents() {
    return (

        <section>
            <div className={styles.tableHeader}>
                <h1> All Students</h1>
                <input placeholder="Search" className={styles.input} type='search' />
            </div>

            <AllstTable />
        </section>
    )
}


Allstudents.getLayout = function getLayout(page) {
    return <Layout>
        {page}
    </Layout>
}