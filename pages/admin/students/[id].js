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
                    <div><b>Name(English) :</b> {data.fName}</div>
                    <div><b>Name(Bangla) : </b>	{data.bName}</div>
                    <div><b>Roll :</b>45</div>
                    <div><b>Class :</b>{data.wadmit}</div>
                    <div><b>Id :</b> 2671</div>
                    <div><b>Age :</b> {data.wadmit}</div>
                </div>
            </div>
            <div className={styles.downDetails}>
                <div>
                    <div className={styles.details}><b>Religion :</b> {data.religion}</div>
                    <div className={styles.details}><b>Brith Reg. Number : </b>	{data.brithregi}</div>
                    <div className={styles.details}><b>Residence :</b>{data.residance}</div>
                    <div className={styles.details}><b>Quata :</b> {data.quata}</div>
                    <div className={styles.details}><b>Blood Group :</b> {data.bloodGroup}</div>
                    <div className={styles.details}><b>Fahter Occupation :</b>{data.fOccupation}</div>
                    <div className={styles.details}><b>Mother Occupation :</b>{data.mOccupation}</div>
                </div>
                <div>
                    <div className={styles.details}><b>Father Monthly Income :</b>{data.fmIncome}</div>
                    <div className={styles.details}><b>Mother Monthly Income: </b>{data.mmIncome}</div>
                    <div className={styles.details}><b>Father Phone Number :</b>{data.fpNumber}</div>
                    <div className={styles.details}><b>Mother Phone Number :</b>{data.mpNumber}</div>
                    <div className={styles.details}><b>Father Email :</b> {data.fEmail}</div>
                    <div className={styles.details}><b>Mother Email :</b>{data.mEmail}</div>
                    <div className={styles.details}><b>Country :</b></div>
                </div>
                <div>
                    <div className={styles.details}><b>Name(English) :</b> Md Emon Hossem</div>
                    <div className={styles.details}><b>Name(Bangla) : </b>	অভিজিৎ</div>
                    <div className={styles.details}><b>Roll :</b>45</div>
                    <div className={styles.details}><b>Father Name :</b> Md Shahin Alam</div>
                    <div className={styles.details}><b>Mother Name :</b> Yesmin Akter</div>
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

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/students/${context.params.id}`);
    const data = await res.json();

    return {
        props: { data }
    }
}