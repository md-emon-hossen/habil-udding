import { useState } from "react";
import Four from "../../componnent/Four";
import Meta from "../../componnent/Meta";
import NextAndPrev from "../../componnent/NextAndPrev";
import One from "../../componnent/One";
import Prograssber from "../../componnent/Prograssber";
import Three from "../../componnent/Three";
import Two from "../../componnent/Two";
import { FromProvider } from "../../context/fromContext";
import styles from "../../styles/Ragistration.module.css";

export default function index() {

    const [rander, setrander] = useState(1);

    return (
        <FromProvider>
            <form className={styles.RAndAWrp}>
                <Meta title="Ragistration" name="Ragistration" content='Ragistration' />
                <h2 className={styles.h2}>Students Registrations</h2>
                <Prograssber rander={rander} setrander={setrander} />
                {rander === 1 && <One />}
                {rander === 2 && <Two />}
                {rander === 3 && <Three />}
                {rander === 4 && <Four />}
                <NextAndPrev rander={rander} setrander={setrander} />
            </form>
        </FromProvider>

    )
}
