import Link from "next/link";
import { useState } from "react";
import { FaUserGraduate } from "react-icons/fa";
import { GoDashboard } from "react-icons/go";
import { HiDocumentText, HiUserGroup } from "react-icons/hi";
import { ImLibrary } from "react-icons/im";
import { TiDocumentText } from "react-icons/ti";
import styles from "../../styles/Admin/Aside.module.css";
import NestedMenu from "./NestedMenu";

export default function Aside() {

    const [sNested, setsNested] = useState(false);
    const [tNested, settNested] = useState(false);
    const [lNested, setlNested] = useState(false);
    const [dNested, setdNested] = useState(false);
    const [rNested, setrNested] = useState(false);


    return (
        <aside className={styles.asideWrp}>
            <div className={styles.Wrp}>
                <Link className={styles.link} href='/admin'> <GoDashboard className={styles.icons} /> Deshboard</Link>

                <NestedMenu contolValue={sNested} updateControllValue={setsNested} title="Students" icon={<FaUserGraduate className={styles.icons} />} value={["Panding Students", 'All Students']} length="2" destination={["/admin/students/pandingstudent", "/admin/students/allstudents"]} />


                <NestedMenu contolValue={tNested} updateControllValue={settNested} title="Teachers" icon={<HiUserGroup className={styles.icons} />} value={["All Teachers", 'Add Teacher', 'Payments']} length="3" destination={["admin/students/allstudents", "admin/students/pandingstudents"]} />


                <NestedMenu contolValue={lNested} updateControllValue={setlNested} title="Library" icon={<ImLibrary className={styles.icons} />} value={["All Books", 'Add Book']} length="2" destination={["admin/students/allstudents", "admin/students/pandingstudents"]} />


                <NestedMenu contolValue={dNested} updateControllValue={setdNested} title="Notices" icon={<TiDocumentText className={styles.icons} />} value={["All Notices", 'Add Notice']} length="2" destination={["admin/students/allstudents", "admin/students/pandingstudents"]} />


                <NestedMenu contolValue={rNested} updateControllValue={setrNested} title="Routing" icon={<HiDocumentText className={styles.icons} />} value={["All Routing", 'Add Routing']} length="2" destination={["admin/students/allstudents", "admin/students/pandingstudents"]} />

            </div>

        </aside >
    )
}
