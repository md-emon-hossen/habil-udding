import forInput from "../helper/inputChecker/forInput";
import styles from "../styles/ImputAndSelect.module.css";

export default function Input({ name, type, require, vl, setFunction }) {

    function handleChange(e) {

        const value = e.target.value;
        const name = e.target.name;

        //tracker
        forInput(name, value, setFunction)
    }


    return (
        <div className={styles.form}>

            <label className={styles.label}>{name}<b className={styles.require}>{require && require}</b> </label>

            <input onChange={(e) => handleChange(e)} name={name} className={styles.input} required={require} type={type ? type : "text"} value={vl} />

        </div>
    )
}

