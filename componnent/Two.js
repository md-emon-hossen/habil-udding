import Input from "../componnent/Input";
import Select from "../componnent/Select";
import { UseFrom } from "../context/fromContext";
import styles from "../styles/Two.module.css";


export default function Two() {

    const {
        fOccupation,
        setfOccupation,
        mOccupation,
        setfmccupation,
        fmIncome,
        setfmIncome,
        mmIncome,
        setmmIncome,
        fpNumber,
        setfpNumber,
        mpNumber,
        setmpNumber,
        fEmail,
        setfEmail,
        mEmail,
        setmEmail
    } = UseFrom();

    return (
        <div className={styles.teoWrp}>
            <h3 className={styles.subhead}>Gardian Informations</h3>
            <div className={styles.fildErp}>
                <Select setFunction={setfOccupation} label="Father Occupation" length='4' value={["Selete Occupation", "Farmer", "Teacher", "Other"]} />

                <Select setFunction={setfmccupation} label="Mother Occupation" length='4' value={["Selete Occupation", "Farmer", "Teacher", "Other"]} />

                <Input setFunction={setfmIncome} vl={fmIncome} name="Father Monthly Income" type="number" />

                <Input setFunction={setmmIncome} vl={mmIncome} name="Mother Monthly Income" type="number" />

                <Input setFunction={setfpNumber} vl={fpNumber} name="Father Phone Number" type="number" />

                <Input setFunction={setmpNumber} vl={mpNumber} name="Mother Phone Number" type="number" />

                <Input setFunction={setfEmail} vl={fEmail} name="Father Email" type="email" />

                <Input setFunction={setmEmail} vl={mEmail} name="Mother Email" type="email" />

            </div>
        </div>
    )
}

