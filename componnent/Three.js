import Select from "../componnent/Select";
import styles from "../styles/Three.module.css";


export default function Three() {
    return (
        <div className={styles.threeWrp}>
            <div className={styles.separed}>
                <h3 className={styles.subhead}>Present Address</h3>
                <div className={styles.parmamentAddress}>
                    <Select label="Country" require="*" length='1' value={["Selete Religion",]} />
                    <Select label="Division" require="*" length='1' value={["Selete Religion",]} />
                    <Select label="Distric" require="*" length='1' value={["Selete Religion",]} />
                    <Select label="Country" require="*" length='1' value={["Selete Religion",]} />
                    <Select label="Division" require="*" length='1' value={["Selete Religion",]} />
                    <Select label="Distric" require="*" length='1' value={["Selete Religion",]} />
                    <Select label="Country" require="*" length='1' value={["Selete Religion",]} />
                    <Select label="Division" require="*" length='1' value={["Selete Religion",]} />

                </div>

            </div>
            <div className={styles.separed}>
                <h3 className={styles.subhead}>Parmanennt Address</h3>
                <div className={styles.parmamentAddress}>
                    <Select label="Country" require="*" length='1' value={["Selete Religion",]} />
                    <Select label="Division" require="*" length='1' value={["Selete Religion",]} />
                    <Select label="Distric" require="*" length='1' value={["Selete Religion",]} />
                    <Select label="Country" require="*" length='1' value={["Selete Religion",]} />
                    <Select label="Division" require="*" length='1' value={["Selete Religion",]} />
                    <Select label="Distric" require="*" length='1' value={["Selete Religion",]} />
                    <Select label="Country" require="*" length='1' value={["Selete Religion",]} />
                    <Select label="Division" require="*" length='1' value={["Selete Religion",]} />

                </div>
            </div>
        </div>
    )
}
