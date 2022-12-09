import Layout from "../../componnent/Admin/Layout";

export default function Admin() {
    return (

        <div>
            <h1>Admin Dashboard</h1>
        </div>
    )
}



Admin.getLayout = function getLayout(page) {
    return <Layout>
        {page}
    </Layout>
}