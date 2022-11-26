import styles from "../styles/Menu.module.css";
import Link from "next/link";

export default function Menu() {
    return (
        <div class={styles.menuWrp}>
            <h3>Menu</h3>
            <ul>
                <Link href='/'><li><a>Home</a></li></Link>
                <Link href='/notice'><li><a>Notic</a></li></Link>
                <Link href='/classroutine'> <li><a>Class Routine</a></li></Link>
                <Link href='/sylebus'> <li><a>Syllabus</a></li></Link>
                <Link href='/examroutine'><li><a>Exam Routine</a></li></Link>
                <Link href='/notice'><li><a>Exam Result</a></li></Link>
                <Link href='/apply'><li><a>Online Registration</a></li></Link>
                <Link href='/notice'><li><a>Exam Admit Card</a></li></Link>
                <Link href='/notice'><li><a>School Cartificate</a></li></Link>
                <Link href='/login'><li><a>Login</a></li></Link>
            </ul >
        </div >
    )
}
