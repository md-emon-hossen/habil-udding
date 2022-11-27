import Link from "next/link";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import styles from "../styles/Navber.module.css";

export default function Navber() {

  const [nav, setNav] = useState(false);
  console.log(nav);

  return <nav className={styles.navberWrp}>
    <div className={styles.moboNav}>
      {nav ? <ImCross className={styles.moboIcons} onClick={() => setNav(!nav)} /> : <FaBars className={styles.moboIcons} onClick={() => setNav(!nav)} />}
    </div>
    <div className={`${styles.NavItem} ${!nav && styles.active}`}>
      <Link className={styles.link} href='/'>Home</Link>
      <Link className={styles.link} href='/notice'>Notice</Link>
      <Link className={styles.link} href='/admission'>Admission</Link>
      <Link className={styles.link} href='/admistration'>Administration</Link>
      <Link className={styles.link} href='/'>Contact us</Link>
      <Link className={styles.link} href='/login'>Login</Link>
    </div>
  </nav>

}
