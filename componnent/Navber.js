import styles from "../styles/Navber.module.css";
import Link from "next/link";
import { useState } from "react"
import {ImCross} from "react-icons/im";
import {FaBars} from "react-icons/fa";

export default function Navber(){

  const[nav,setNav]=useState(false);

   return <nav className={styles.navberWrp}>
            <div className={styles.moboNav}>
            {nav ? <ImCross className={styles.moboIcons} onClick={() => setNav(!nav)} /> : <FaBars className={styles.moboIcons} onClick={() => setNav(!nav)} />}
           
            </div>  
           
              <ol className={`${styles.NavItem} ${nav && styles.active}`}>
                <Link className={styles.link} href='/'><li><a>Home</a></li></Link>
                <Link className={styles.link} href='/notice'><li><a>Notice</a></li></Link>
                <Link className={styles.link} href='/admission'><li><a>Admission</a></li></Link>
                <Link className={styles.link} href='/admistration'><li><a>Administration</a></li></Link>

                <Link className={styles.link} href=''><li><a>Contact us</a></li></Link>
                <Link className={styles.link} href='/login'><li><a>Login</a></li></Link>

            </ol>
        </nav>

}
