import ChartAdeshboard from "../../componnent/Admin/ChartAdeshboard";
import DetailseDeshboard from "../../componnent/Admin/DetailseDeshboard";
import FutureAdeshboard from "../../componnent/Admin/FutureAdeshboard";
import Layout from "../../componnent/Admin/Layout";
import styles from "../../styles/Admin/Admin.module.css";

export default function Admin() {
    return (

        <div className={styles.adminWrp}>
            <FutureAdeshboard />

            <ChartAdeshboard />

            <DetailseDeshboard />
        </div>
    )
}



Admin.getLayout = function getLayout(page) {
    return <Layout>
        {page}
    </Layout>
}