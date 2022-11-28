import styles from "../styles/ImputAndSelect.module.css";

export default function Input({ name, type, require }) {

    // const [fName, setfName] = useState('');
    // const [lName, setlName] = useState('');
    // const [bName, setbName] = useState('');
    // const [roll, setroll] = useState('');
    // const [faterName, setfaterName] = useState('');
    // const [moterName, setfmoterName] = useState('');
    // const [sContact, setsContact] = useState('');
    // const [brithregi, setbrithregi] = useState('');



    // function handleChange(e) {
    //     const checkRequire = e.target.required;
    //     const value = e.target.value;
    //     const name = e.target.name;


    //     // state update indivigule
    //     switch (name) {
    //         case "Frist Name (English)":
    //             setfName(value)
    //             break;
    //         case "Last Name":
    //             setlName(value)
    //             break;
    //         case "Name (Bangla)":
    //             setbName(value)
    //             break;
    //         case "Roll Number":
    //             setroll(value)
    //             break;
    //         case "Father's Name":
    //             setfaterName(value)
    //             break;
    //         case "Mother's Name":
    //             setfmoterName(value)
    //             break;
    //         case "Student Contact Number":
    //             setsContact(value)
    //             break;
    //         case "Brith Reg Number":
    //             setbrithregi(value)
    //             break;
    //         default: console.log('not allow')
    //             break;
    //     }
    // }

    // //require validate
    // if (require) {
    //     if(){}
    // }


    // console.log(fName);
    // console.log(lName);


    return (
        <div className={styles.form}>

            <label className={styles.label}>{name}<b className={styles.require}>{require && require}</b> </label>

            <input name={name} className={styles.input} required={require} type={type ? type : "text"} />

        </div>
    )
}

