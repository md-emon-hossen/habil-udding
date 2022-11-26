import styles from "../styles/TrandToday.module.css";
import {TfiAnnouncement} from "react-icons/tfi";

export default function TrandToday({clasname}) {
    return (
        <div className={`${styles.trandTodayWrp} ${clasname && styles.noticeCall}`}>
            <div className={styles.trandingToday}>
                <h4><TfiAnnouncement className={styles.trandIcons} />Trending Today</h4>
            </div>
            <div className={styles.marquee}>
                <marquee behavior="scroll" direction="left">this a a school website......... Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae quidem magnam iusto in quisquam suscipit. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores, excepturi. Adipisci non sed accusamus modi consequuntur repellat saepe quibusdam assumenda.  </marquee>
            </div>
        </div>
    )
}
