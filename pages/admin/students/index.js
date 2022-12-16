import AllstTable from "../../../componnent/Admin/AllstTable";
import Layout from "../../../componnent/Admin/Layout";
import Meta from "../../../componnent/Meta";
import styles from "../../../styles/Admin/Allstudents.module.css";


export default function Allstudents({ data }) {



    return (

        <div className={styles.Swrp}>
            <Meta title="Admin" name="Admin" content='Admin' />
            <div className={styles.tableHeader}>
                <h1> All Students</h1>
                <input placeholder="Search" className={styles.input} type='search' />
            </div>
            <AllstTable data={data} />
        </div>
    )
}


Allstudents.getLayout = function getLayout(page) {
    return <Layout>
        {page}
    </Layout>
}


export async function getServerSideProps(context) {

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/students`);
    const data = await res.json();

    return {
        props: { data }, // will be passed to the page component as props
    }
}