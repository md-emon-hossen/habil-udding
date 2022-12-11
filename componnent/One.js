import Input from "../componnent/Input";
import Select from "../componnent/Select";
import { UseFrom } from "../context/fromContext";
import styles from "../styles/One.module.css";


export default function One() {


    const { fName,
        setfName,
        lName,
        setlName,
        bName,
        setbName,
        wadmit,
        setwadmit,
        faterName,
        setfaterName,
        moterName,
        setfmoterName,
        sContact,
        setsContact,
        brithregi,
        setbrithregi,
        bloodGroup,
        setbloodGroup,
        quata,
        setquata,
        residance,
        setresidance,
        gender,
        setgender,
        religion,
        setreligion

    } = UseFrom();



    return (
        <div className={styles.oneWrp}>
            <h3 className={styles.subhead}>Student's Informations</h3>
            <div className={styles.fildErp}>

                <Input setFunction={setfName} vl={fName} name="Frist Name (English)" require="*" />

                <Input setFunction={setlName} vl={lName} name="Last Name" />

                <Input setFunction={setbName} vl={bName} name="Name (Bangla)" require="*" />

                <Input setFunction={setwadmit} vl={wadmit} name="Want to Admmit" require="*" type="number" />

                <Input setFunction={setfaterName} vl={faterName} name="Father's Name" require="*" />

                <Input setFunction={setfmoterName} vl={moterName} name="Mother's Name" require="*" />

                <Input setFunction={setsContact} vl={sContact} name="Student Contact Number" require="*" type="number" />

                <Select setFunction={setreligion} label="Religion" require="*" length='4' value={["Selete Religion", "Islam", "Hindu", "Others"]} />

                <Select setFunction={setgender} label="Gander" length='3' require="*" value={["Selete Gander", "Male", "Female"]} />

                <Input setFunction={setbrithregi} vl={brithregi} name="Brith Reg Number" require="*" type="number" />

                <Select setFunction={setresidance} label="Residence" length='3' value={["Selete Residence", "Residence", "Non-Residence"]} />

                <Select setFunction={setquata} label="Quata" length='4' value={["Selete Quata", "Freedom Fighter", "Trivel", "Non-Trivel"]} />

                <Select setFunction={setbloodGroup} label="Blood Group" length='9' value={["Selete Blood Group", "A+", "B+", "O+", "AB+", "A-", "B-", "O-", "AB-"]} />

            </div>
        </div>
    )
}

