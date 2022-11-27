import { useState } from "react";
import Meta from "../componnent/Meta";
import styles from "../styles/Ragistration.module.css";


export default function Ragistration() {

    const [rander, setrander] = useState(1);

    return (
        <form className={styles.RAndAWrp}>
            <Meta title="Ragistration" name="Ragistration" content='Ragistration' />
            <h2>Students Registrations</h2>


            what is the problems


            {/* <One /> */}
            {/* <Prograssber rander={rander} setrander={setrander} /> */}
            {/* {rander === 1 && <One />} */}
            {/* {rander === 2 && <Two />}
            {rander === 3 && <Three />}
            {rander === 4 && <Four />} */}
            {/* <NextAndPrev rander={rander} setrander={setrander} /> */}
        </form>
    )
}
