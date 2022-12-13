import Meta from "../componnent/Meta";
import SingleLogin from "../componnent/SingleLogin";
import styles from "../styles/Login.module.css";


export default function Login() {
    return (
        <div>
            <Meta title="Login Page" name="Login Page" content='Login page' />
            <div className={styles.singlelogin}>
                <SingleLogin title="Login" fildTwo='Password' FildOne='Email' buttonTitle="Login" />
            </div>
        </div>
    )
}
