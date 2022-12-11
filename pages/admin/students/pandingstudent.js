import Layout from "../../../componnent/Admin/Layout";
import styles from "../../../styles/Admin/Allstudents.module.css";


export default function PaddingStudents() {
    return (

        <div>
            <div className={styles.tableHeader}>
                <h1> Padding Students</h1>
                <input placeholder="Search" className={styles.input} type='search' />
            </div>



        </div>
    )
}


PaddingStudents.getLayout = function getLayout(page) {
    return <Layout>
        {page}
    </Layout>
}