import styles from "../styles/Aside.module.css";
import Menu from "../componnent/Menu";
import ImportantLink from "../componnent/ImportantLink";

export default function Aside() {
    return (
        <div className={styles.asideWer}>
            <Menu />
            <ImportantLink />
        </div >
    )
}
