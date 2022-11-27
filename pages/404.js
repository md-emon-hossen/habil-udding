import Link from "next/link";
import Meta from "../componnent/Meta";
import styles from "../styles/NotFound.module.css";

export default function NotFound() {
    return (
        <div className={styles.notFound}>
            <Meta title="404 Not Found" name="404 Not Found" content='404 Not Found' />
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
