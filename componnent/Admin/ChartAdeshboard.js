import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import styles from "../../styles/Admin/ChartAdeshboard.module.css";



export default function ChartAdeshboard() {

    const data = [{ name: 'jan', uv: 6000, pv: 7000 }, { name: 'Feb', uv: 1600, pv: 2400 }, { name: 'Mar', uv: 3000, pv: 1880 }, { name: 'Apr', uv: 440, pv: 2700 }, { name: 'May', uv: 400, pv: 2400 }, { name: 'Jun', uv: 1400, pv: 2000 }, { name: 'Jul', uv: 6000, pv: 9000 }, { name: 'Agu', uv: 400, pv: 2400 }, { name: 'Sep', uv: 1400, pv: 1480 }, { name: 'Oct', uv: 440, pv: 2700 }, { name: 'Nov', uv: 400, pv: 2400 }, { name: 'Dec', uv: 1400, pv: 3480 }];


    return (
        <div className={styles.chartWrp}>
            <div className={styles.chartTitle}>
                <div>Earning :  <div className={styles.tooltipexpenseb}></div> </div>
                <div>Expense : <div className={styles.tooltipred}> </div> </div>
            </div>
            <div>
                <LineChart width={950} height={300} data={data}>
                    <Line type="monotone" dataKey="pv" stroke="green" />
                    <Line type="monotone" dataKey="uv" stroke="red" />
                    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
                    <XAxis dataKey="name" />
                    <YAxis />
                </LineChart>
            </div>
        </div>
    )
}
