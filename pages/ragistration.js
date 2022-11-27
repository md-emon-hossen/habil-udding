import { useState } from "react";
import NextAndPrev from "../componnent/NextAndPrev";
import One from "../componnent/One";
import Prograssber from "../componnent/Prograssber";
import styles from "../styles/Ragistration.module.css";


export default function Ragistration() {

    const [rander, setrander] = useState(1);

    return (
        <form className={styles.RAndAWrp}>
            <h2>Students Registrations</h2>
            <Prograssber rander={rander} setrander={setrander} />
            {rander === 1 && <One />}
            {/* {rander === 2 && <Two />}
            {rander === 3 && <Three />}
            {rander === 4 && <Four />} */}
            <NextAndPrev rander={rander} setrander={setrander} />
        </form>
    )
}