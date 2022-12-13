import Layout from "../../../componnent/Admin/Layout";

export default function Add() {
    return (
        <div>
            <h1>Add Teachers from here</h1>
        </div>
    )
}


Add.getLayout = function getLayout(page) {
    return <Layout>
        {page}
    </Layout>
}