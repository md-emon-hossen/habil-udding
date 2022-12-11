import Input from "../componnent/Input";
import { UseFrom } from "../context/fromContext";
import styles from "../styles/Four.module.css";

export default function Four() {

    const {
        familyCall,
        setfamilyCall,
        photo,
        setphoto
    } = UseFrom();



    return (
        <div className={styles.teoWrp}>
            <h3 className={styles.subhead}>Contact Informations</h3>
            <div className={styles.fildErp}>

                <Input setFunction={setfamilyCall} vl={familyCall} name="Family Phone Number" type="number" />
                <Input setFunction={setphoto} vl={photo} name="Student's Photo  (only JPG,JPEG,PNG  and file size 100 kb )" type="file" />

            </div>
        </div>
    )
}
