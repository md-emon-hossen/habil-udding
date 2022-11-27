import Link from "next/link"
import styles from "../styles/NotFound.module.css"

export default function NotFound() {
    return (
        <div className={styles.notFound}>
            <div className={styles.notFoundWrp}>
                <div>
                    <h2>404 Not Found</h2>
                    <h3>the page you are looking for could not be found.</h3>
                </div>
                <Link className={styles.link} href='/'>Go Back to Home</Link>
            </div>
        </div>
    )
}
