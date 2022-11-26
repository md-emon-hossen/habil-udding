import styles from "../styles/TrandToday.module.css";
import {TfiAnnouncement} from "react-icons/tfi";

export default function TrandToday({clasname}) {
    return (
        <div className={`${styles.trandTodayWrp} ${clasname && styles.noticeCall}`}>
            <div className={styles.trandingToday}>
                <h4><TfiAnnouncement className={styles.trandIcons} />Trending Today</h4>
            </div>
            <div className={styles.marquee}>
                <marquee behavior="scroll" direction="left">ভর্তি বিজ্ঞপ্তি: ৬ষ্ঠ থেকে নবম শ্রেণি ( বিজ্ঞান ও ব্যবসায় শিক্ষা ) পর্যন্ত ভর্তি প্রক্রিয়া চলছে || এইচ এস সি - ২০২২ চুড়ান্ত মডেল টেস্ট পরীক্ষার ফলাফল || HSC Board Exam Routine - 2022 ||  </marquee>
            </div>
        </div>
    )
}

