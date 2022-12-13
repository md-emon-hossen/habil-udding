import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../../styles/Admin/PandingTable.module.css";

export default function PandingTable({ Data, setloading, loading }) {

    const [res, setres] = useState('');


    const router = useRouter();


    async function handleAdd(e, id) {
        e.preventDefault();
        setloading(true);
        const respons = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/students/panding`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: id, sttus: true })
        })

        const respond = respons.json();
        setres(respond);
        setloading(false);
        router.push("/admin/students");

    }


    async function handleCencle(e, id) {
        e.preventDefault();
        console.log(res);
        setloading(true);

        const respons = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/students/panding`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id })
        })
        const respond = respons.json();
        setres(respond);
        setloading(false);
        window.location.reload();
    }




    return (
        <div className={styles.pandingTableWrp}>
            <div className={styles.thead}>
                <td className={styles.headdiv}>SL</td>
                <td className={styles.headdiv}>Id</td>
                <td className={styles.headdiv}> Name</td >
                <td className={styles.headdiv}>Father's Name</td>
                <td className={styles.headdiv}>Mother's Name</td>
                <td className={styles.headdiv}>Action</td>
            </div >


            {
                Data.map((item, index) => {
                    return <div className={styles.tbody}>
                        <td className={styles.bodydiv}>{index + 1}</td>
                        <td className={styles.bodydiv}>Id</td>
                        <td className={styles.bodydiv}>{item.fName}</td>
                        <td className={styles.bodydiv}>{item.faterName}</td>
                        <td className={styles.bodydiv}>{item.moterName}</td>
                        <td className={`${styles.bodydiv} ${styles.btnWrp}`}>
                            <button disabled={loading} onClick={(e) => handleCencle(e, item._id)} className={`${styles.button} ${styles.cencle}`}>Cencle</button>
                            <button disabled={loading} onClick={(e) => handleAdd(e, item._id)} className={`${styles.button} ${styles.add}`}>Add</button>
                        </td>
                    </div>
                })
            }
        </div>
    )
}


