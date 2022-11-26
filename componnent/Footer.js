import styles from "../styles/Footer.module.css";
import {BsArrowRight}from "react-icons/bs";
import{FaFacebookF}from "react-icons/fa";
import {AiOutlineTwitter} from "react-icons/ai";
import{AiFillInstagram}from "react-icons/ai";
import {AiFillLinkedin} from "react-icons/ai";
import{IoLogoWhatsapp}from "react-icons/io";
import {GrMail} from "react-icons/gr";


export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrp}>
        <div className={styles.singleWrp}>
            <h4 className={styles.footerhadering}>Get in Touch</h4>
            <ul className={styles.ul}>
                <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Campus Contact</a></li>
                <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Meet With Us</a></li>
                <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Report Copyright Infringement</a></li>
                <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Report on Security Issues</a></li>
                <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Privacy Statement</a></li>
                <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Recom. For Traffic Mgt</a></li>
                <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Newsletters</a></li>
                <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Covid-19 updates</a></li>
            </ul>
        </div>
        <div className={styles.singleWrp}>
            <h4 className={styles.footerhadering}>Branding</h4>
            <ul className={styles.ul}>
                <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Campus Contact</a></li>
                <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Meet With Us</a></li>
                <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Report Copyright Infringement</a></li>
                <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Report on Security Issues</a></li>
                <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Privacy Statement</a></li>
                <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Recom. For Traffic Mgt</a></li>
                <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Newsletters</a></li>
                <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Covid-19 updates</a></li>
            </ul>
        </div>
        <div className={styles.singleWrp}>
            <h4 className={styles.footerhadering}>Useful Links</h4>
            <ul className={styles.ul}>
                <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Campus Contact</a></li>
                <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Meet With Us</a></li>
                <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Report Copyright Infringement</a></li>
                <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Report on Security Issues</a></li>
                <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Privacy Statement</a></li>
                <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Recom. For Traffic Mgt</a></li>
                <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Newsletters</a></li>
                <li><a href="#"><BsArrowRight className={styles.rightArrowIcons} />Covid-19 updates</a></li>
            </ul>
        </div>
        <div className={styles.singleWrp}>
            <h4 className={styles.footerhadering}>Subscribe Us!</h4>
            <div className={styles.Subscribe}>
                <input type="email" placeholder="Enter Email Address" />
                <button>Subscribe</button>
            </div>
            <h4 className={styles.footerhadering}>Connect With Us</h4>
            <div className={styles.Connect}>
                <div className={styles.Cfacebook}><FaFacebookF className={styles.contaceIcons} /></div>
                <div className={styles.Ctwitter}><AiOutlineTwitter className={styles.contaceIcons} /></div>
                <div className={styles.cInsta}><AiFillInstagram className={styles.contaceIcons} /></div>
                <div className={styles.Cin}><AiFillLinkedin className={styles.contaceIcons} /></div>
                <div className={styles.cWhats}><IoLogoWhatsapp className={styles.contaceIcons} /></div>
                <div className={styles.cMail}><GrMail className={styles.contaceIcons} /></div>
            </div>
        </div>





        <div className={styles.copyRight}>Copyright © 2022
            Hazi Habil Uddin Ideal Academy. All Rights Reserved.</div>
    </div>
    </footer>
)
}
