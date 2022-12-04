import Layout from "../../componnent/Admin/Layout";

export default function Admin() {
    return (

        <section>
            <h1>Admin Dashboard</h1>
        </section>
    )
}



Admin.getLayout = function getLayout(page) {
    return <Layout>
        {page}
    </Layout>
}