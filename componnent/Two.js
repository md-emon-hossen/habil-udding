import Input from "../componnent/Input";
import Select from "../componnent/Select";
import styles from "../styles/Two.module.css";


export default function Two() {
    return (
        <div className={styles.teoWrp}>
            <h3 className={styles.subhead}>Gardian Informations</h3>
            <div className={styles.fildErp}>
                <Select label="Father Occupation" length='4' value={["Selete Occupation", "Farmer", "Teacher", "Other"]} />
                <Select label="Mother Occupation" length='4' value={["Selete Occupation", "Farmer", "Teacher", "Other"]} />
                <Input name="Father Monthly Income" type="number" />
                <Input name="Mother Monthly Income" type="number" />
                <Input name="Father Phone Number" type="number" />
                <Input name="Mother Phone Number" type="number" />
                <Input name="Father Email" type="email" />
                <Input name="Mother Email" type="email" />

            </div>
        </div>
    )
}
