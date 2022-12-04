import { AiOutlineEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import styles from "../../styles/Admin/AllStTable.module.css";

export default function AllstTable() {
    return (
        <table className={styles.table} border='1'>
            <tr>
                <td>SL</td>
                <td>Name</td>
                <td>hhgf</td>
                <td>SL</td>
                <td>Name</td>
                <td>hhgf</td>
                <td>SL</td>
                <td>Name</td>
                <td>Action</td>
            </tr>
            <tr>
                <td>SL</td>
                <td>Name</td>
                <td>hhgf</td>
                <td>SL</td>
                <td>Name</td>
                <td>hhgf</td>
                <td>SL</td>
                <td>Name</td>
                <td>
                    <button className={styles.edit}><AiOutlineEdit className={styles.icons} /></button>
                    <button className={styles.delete}><MdDeleteOutline className={styles.icons} /></button>
                </td>
            </tr>



            <tr>
                <td>SL</td>
                <td>Name</td>
                <td>hhgf</td>
                <td>SL</td>
                <td>Name</td>
                <td>hhgf</td>
                <td>SL</td>
                <td>Name</td>
                <td>
                    <button className={styles.edit}><AiOutlineEdit className={styles.icons} /></button>
                    <button className={styles.delete}><MdDeleteOutline className={styles.icons} /></button>
                </td>
            </tr>


        </table>
    )
}
