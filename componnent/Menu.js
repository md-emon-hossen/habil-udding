import Link from "next/link";
import styles from "../styles/Menu.module.css";

export default function Menu() {
    return (
        <div className={styles.menuWrp}>
            <h3>Menu</h3>
            <div className={styles.div}>
                <Link className={styles.link} href='/'>Home</Link>
                <Link className={styles.link} href='/notice'>Notic</Link>
                <Link className={styles.link} href='/classroutine'> Class Routine</Link>
                <Link className={styles.link} href='/sylebus'> Syllabus</Link>
                <Link className={styles.link} href='/examroutine'>Exam Routine</Link>
                <Link className={styles.link} href='/notice'>Exam Result</Link>
                <Link className={styles.link} href='/ragistration'>Online Registration</Link>
                <Link className={styles.link} href='/notice'>Exam Admit Card</Link>
                <Link className={styles.link} href='/notice'>School Cartificate</Link>
                <Link className={styles.link} href='/login'>Login</Link>
            </div>
        </div >
    )
}
