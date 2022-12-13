import { useState } from "react";
import Layout from "../../../componnent/Admin/Layout";
import PandingTable from "../../../componnent/Admin/PandingTable";
import Loding from "../../../componnent/Loding";
import styles from "../../../styles/Admin/Allstudents.module.css";


export default function PaddingStudents({ Data }) {

    const [loading, setloading] = useState(false);

    return (

        <div className={styles.Swrp}>
            <div className={styles.tableHeader}>
                {loading && <Loding />}
                <h1> Padding Students</h1>
                <input placeholder="Search" className={styles.input} type='search' />
            </div>
            <PandingTable Data={Data} loading={loading} setloading={setloading} />
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