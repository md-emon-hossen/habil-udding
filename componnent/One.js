import Input from "../componnent/Input";
import Select from "../componnent/Select";
import styles from "../styles/one.module.css";

export default function One() {
    return (
        <div className={styles.oneWrp}>

            <h3 className={styles.subhead}>Student's Informations</h3>

            <div className={styles.fildErp}>
                <Input name="Frist Name (English)" require="*" />
                <Input name="Last Name" />
                <Input name="Name (Bangla)" require="*" />
                <Input name="Roll Number" require="*" type="number" />
                <Input name="Father's Name" require="*" />
                <Input name="Mother's Name" require="*" />
                <Input name="Student Contact Number" require="*" type="number" />
                <Select label="Religion" require="*" length='4' value={["Selete Religion", "Islam", "Hindu", "Others"]} />
                <Select label="Gander" length='3' require="*" value={["Selete Gander", "Male", "Female"]} />
                <Input name="Brith Reg Number" require="*" type="number" />
                <Select label="Residence" length='3' value={["Selete Residence", "Residence", "Non-Residence"]} />
                <Select label="Quata" length='4' value={["Selete Quata", "Freedom Fighter", "Trivel", "Non-Trivel"]} />
                <Select label="Blood Group" length='9' value={["Selete Blood Group", "A+", "B+", "O+", "AB+", "A-", "B-", "O-", "AB-"]} />
            </div>
        </div>
    )
}
