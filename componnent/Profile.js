import styles from "../styles/Profile.module.css";
import Image from "next/image";

export default function Profile() {
    return (

        <div className={styles.profilewrp}>
            <div>
                <div className={styles.mainiiiTitle}>
                    <h4>Head of Organization</h4>
                </div>
                <div className={styles.headTeacherImg }>
                    {/* <Image className="headTImg" src="/one.jpg" width="100px" alt="" /> */}
                </div>
                <div className={styles.teacherName}>
                    <h4>Md.mijanur Rahaman</h4>
                </div>
            </div>
        </div>

    )
}
