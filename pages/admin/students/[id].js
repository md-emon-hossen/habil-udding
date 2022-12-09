import Image from "next/image";
import Layout from "../../../componnent/Admin/Layout";
import profile from "../../../public/profile.jpg";
import styles from "../../../styles/Admin/SingleStudentWrper.module.css";

export default function Index({ data }) {

    return (
        <div className={styles.SingleWrper}>
            <div className={styles.upprofile}>
                <div className={styles.profile}>
                    <Image className={styles.img} src={profile} alt="single Profile" />
                </div>
                <div className={styles.topDetails}>
                    <div><b>Name(English) :</b> {data.name}</div>
                    <div><b>Name(Bangla) : </b>	অভিজিৎ</div>
                    <div><b>Roll :</b>45</div>
                    <div><b>Class :</b> 9</div>
                    <div><b>Id :</b> 2671</div>
                    <div><b>Age :</b> {data.age}</div>
                </div>
            </div>
            <div className={styles.downDetails}>
                <div>
                    <div className={styles.details}><b>Religion :</b> Md Emon Hossem</div>
                    <div className={styles.details}><b>Brith Reg. Number : </b>	অভিজিৎ</div>
                    <div className={styles.details}><b>Residence :</b>45</div>
                    <div className={styles.details}><b>Quata :</b> Md Shahin Alam</div>
                    <div className={styles.details}><b>Blood Group :</b> Yesmin Akter</div>
                    <div className={styles.details}><b>Fahter' Occupation :</b> 0198740986</div>
                    <div className={styles.details}><b>Mother's Occupation :</b> 0198740986</div>
                </div>
                <div>
                    <div className={styles.details}><b>Father's Monthly Income :</b> Md Emon Hossem</div>
                    <div className={styles.details}><b>Mother's Monthly Income: </b>	অভিজিৎ</div>
                    <div className={styles.details}><b>Father's Phone Number :</b>45</div>
                    <div className={styles.details}><b>Mother's Phone Number :</b> Md Shahin Alam</div>
                    <div className={styles.details}><b>Father's Email :</b> Yesmin Akter</div>
                    <div className={styles.details}><b>Mother's Email :</b> 0198740986</div>
                    <div className={styles.details}><b>Country :</b> Bangladesh</div>
                </div>
                <div>
                    <div className={styles.details}><b>Name(English) :</b> Md Emon Hossem</div>
                    <div className={styles.details}><b>Name(Bangla) : </b>	অভিজিৎ</div>
                    <div className={styles.details}><b>Roll :</b>45</div>
                    <div className={styles.details}><b>Father's Name :</b> Md Shahin Alam</div>
                    <div className={styles.details}><b>Mother's Name :</b> Yesmin Akter</div>
                    <div className={styles.details}><b>Student Contact :</b> 0198740986</div>
                    <div className={styles.details}><b>Student Contact :</b> 0198740986</div>
                </div>
            </div>
        </div>
    )
}


Index.getLayout = function getLayout(page) {
    return <Layout>
        {page}
    </Layout>
}


export async function getServerSideProps(context) {

    const res = await fetch(`${process.env.BASE_URL}/api/students/${context.params.id}`);
    const data = await res.json();

    return {
        props: { data }
    }
}