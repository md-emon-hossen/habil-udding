import Input from "../componnent/Input";
import Select from "../componnent/Select";
import styles from "../styles/Four.module.css";


export default function Four() {
    return (
        <div className={styles.teoWrp}>
            <h3 className={styles.subhead}>Contact Informations</h3>
            <div className={styles.fildErp}>
                <Select label="Father Occupation" length='1' value={["Selete Religion",]} />
                <Select label="Mother Occupation" length='1' value={["Selete Religion",]} />
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
