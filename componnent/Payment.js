import styles from "../styles/Payment.module.css";
import Image from "next/image";

export default function Payment() {
    return (
        <div className={styles.paymentWrp}>
            <h3 className={styles.heading}>Online Payment System</h3>
            <p className={styles.para}>You can pay any fee thoungh</p>
            <div className={styles.paydivwrp}>
                <div className={styles.idiv}>
                    {/* <Image className={styles.iconsImg} src={bkash} alt="icons" /> */}
                </div>
                <div className={styles.idiv}>
                    {/* <Image className={styles.iconsImg} src={recket} alt="icons" /> */}
                </div>
                <div className={styles.idiv}>
                    {/* <Image className={styles.iconsImg} src={dbbl} alt="icons" /> */}
                </div>
                <div className={styles.idiv}>
                    {/* <Image className={styles.iconsImg} src={islami} alt="icons" /> */}
                </div>
            </div>
        </div>
    )
}
