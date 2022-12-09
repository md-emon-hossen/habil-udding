import Link from "next/link";
import Loding from "../../componnent/Loding";
import styles from "../../styles/Admin/AllstTable.module.css";

export default function AllstTable({ data }) {


    return (
        <>
            {
                data ? <div className={styles.table
                } >
                    <div className={styles.thead}>
                        <td className={styles.headdiv}>SL</td>
                        <td className={styles.headdiv}>Id</td>
                        <td className={styles.headdiv}> Name</td >
                        <td className={styles.headdiv}>Father's Name</td>
                        <td className={styles.bodydiv}>Mother's Name</td>
                        <td className={styles.headdiv}>Class</td>
                        <td className={styles.headdiv}>Roll</td>
                        <td className={styles.headdiv}>Catagory</td>
                        <td className={styles.headdiv}>Payment Status</td>
                    </div >

                    {
                        data.map((item, index) => {
                            return <Link key={item._id} className={styles.tbody} href={`/admin/students/${item._id}`} passHref>
                                <td className={styles.bodydiv}>{index + 1}</td>
                                <td className={styles.bodydiv}>Id</td>
                                <td className={styles.bodydiv}>{item.name}</td>
                                <td className={styles.bodydiv}>Father's Name</td>
                                <td className={styles.bodydiv}>Mother's Name</td>
                                <td className={styles.bodydiv}>Class</td>
                                <td className={styles.bodydiv}>Roll</td>
                                <td className={styles.bodydiv}>Catagory</td>
                                <td className={styles.bodydiv}>Payment Status</td>
                            </Link>
                        })
                    }


                </div > : <Loding />

            }

        </>
    )
}
