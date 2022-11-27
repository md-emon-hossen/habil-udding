import styles from "../styles/ImputAndSelect.module.css";

export default function Input({ name, type, require }) {
    return (
        <div className={styles.form}>
            <label className={styles.label}>{name}<b className={styles.require}>{require && require}</b> </label>
            <input className={styles.input} required={require} type={type ? type : "text"} />

        </div>
    )
}

