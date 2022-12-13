import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/SingleLogin.module.css";

export default function SingleLogin({ title, FildOne, fildTwo, buttonTitle }) {

    const router = useRouter();

    const email = "admin@gmail.com";
    const password = "adminadmin";

    const [emailfiled, setemailFiled] = useState("");
    const [passFiled, setpassFiled] = useState("");

    function handleClick(e) {
        e.preventDefault();
        if (emailfiled === email && passFiled === password) {
            router.push("/admin");
        } else {
            alert("Palse Enter Credancial");
        }
    }


    return (
        <div className={styles.loginWRp}>
            <h2 className={styles.h2}>{title}</h2>
            <input onChange={(e) => setemailFiled(e.target.value)} className={styles.input} placeholder={FildOne} type={FildOne} />
            <input onChange={(e) => setpassFiled(e.target.value)} className={styles.input} placeholder={fildTwo} type={fildTwo} />
            <button onClick={(e) => handleClick(e)} className={styles.button}>{buttonTitle}</button>

            <Link className={styles.forgetpass} href="/reset">Forget Password</Link>
        </div>
    )
}