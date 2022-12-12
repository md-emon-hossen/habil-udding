import Layout from "../../../componnent/Admin/Layout";
import PandingTable from "../../../componnent/Admin/PandingTable";
import styles from "../../../styles/Admin/Allstudents.module.css";


export default function PaddingStudents({ Data }) {

    return (

        <div className={styles.Swrp}>
            <div className={styles.tableHeader}>
                <h1> Padding Students</h1>
                <input placeholder="Search" className={styles.input} type='search' />
            </div>
            <PandingTable Data={Data} />
        </div>
    )
}


PaddingStudents.getLayout = function getLayout(page) {
    return <Layout>
        {page}
    </Layout>
}


export async function getServerSideProps(context) {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/students/panding`);
    const Data = await res.json();

    return {
        props: { Data }
    }
}