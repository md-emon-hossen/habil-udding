import { useState } from "react";
import styles from "../../styles/Admin/PaymentInput.module.css";

export default function PaymentInput({ sId }) {

    const [nameforone, setnameforone] = useState({ quentity: 1, value: 700, name: "" });
    const [namefortwo, setnamefortwo] = useState({ quentity: 1, value: 700, name: "" });
    const [nameforthree, setnameforthree] = useState({ quentity: 1, value: 700, name: "" });

    function handleSelete(e) {

        const cname = e.target.name;
        const nameValue = e.target.value;

        switch (cname) {
            case "1":
                setnameforone({ ...nameforone, name: nameValue })
                break;
            case "2":
                setnamefortwo({ ...namefortwo, name: nameValue })
                break;
            case "3":
                setnameforthree({ ...nameforthree, name: nameValue })
                break;

            default:
                console.log("unknown");
                break;
        }


    }


    function handleChangleforValue(e) {

        const cname = e.target.name;
        const nameValue = e.target.value;

        switch (cname) {
            case "1":
                setnameforone({ ...nameforone, quentity: nameValue })
                break;
            case "2":
                setnamefortwo({ ...namefortwo, quentity: nameValue })
                break;
            case "3":
                setnameforthree({ ...nameforthree, quentity: nameValue })
                break;

            default:
                console.log("unknown");
                break;
        }


    }




    return (
        <div className={styles.paymentInputWrp} >
            <div className={styles.paymentFiledWrper}>
                <div>
                    <select onChange={(e) => handleSelete(e)} name={sId} className={styles.filed}>
                        <option className={styles.option}>Selete one</option>
                        <option className={styles.option}>Monthly Fee</option>
                        <option className={styles.option}>Exam Fee</option>
                        <option className={styles.option}>Section Fee</option>
                        <option className={styles.option}>Course Fee</option>
                        <option className={styles.option}>Registration Fee</option>
                        <option className={styles.option}>MarkShirt Fee</option>
                        <option className={styles.option}>Tastimonial Fee</option>
                        <option className={styles.option}>Deparment Change Fee</option>
                        <option className={styles.option}>Admission Fee</option>
                        <option className={styles.option}>Admission Form Fee</option>
                        <option className={styles.option}>Others Fee</option>
                        <option className={styles.option}>Oral Exam Fee</option>
                        <option className={styles.option}>Central Fee</option>
                        <option className={styles.option}>Intarnal Sports Fee</option>
                        <option className={styles.option}>National Sports Fee</option>
                        <option className={styles.option}>Common Room Fee</option>
                        <option className={styles.option}>Magagin Fee</option>
                        <option className={styles.option}>Institute Development Fee</option>
                        <option className={styles.option}>Library Fee</option>
                        <option className={styles.option}>Labratory Fee</option>
                        <option className={styles.option}>Fine</option>
                        <option className={styles.option}>Electicity/Water/Gas</option>
                        <option className={styles.option}>New Student Welcome Fee</option>
                        <option className={styles.option}>Educational Travel Fee</option>
                        <option className={styles.option}>Delay Fee</option>
                    </select>
                </div>
                <div>
                    <input name={sId} onChange={(e) => handleChangleforValue(e)} className={styles.filed} type="Number" />
                </div>
                <div className={styles.filed}>

                </div>
                <div className={styles.filed}>

                </div>
            </div>
        </div>
    )
}
