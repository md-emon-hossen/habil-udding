import styles from "../styles/NextAndPrev.module.css";

export default function NextAndPrev({ setrander, rander }) {
    function handliIClick(e) {
        e.preventDefault()


        setrander((prev) => {
            return prev + 1;
        })

    }


    function handliDClick(e) {
        e.preventDefault()
        setrander((pre) => {
            return pre - 1;
        })
    }

    function handleSubmit() {

    }


    return (
        <div className={styles.nextandPrevWrp}>
            <button disabled={rander === 1} onClick={(e) => handliDClick(e)}>Prev</button>
            {rander !== 4 ? <button disabled={rander === 4} onClick={(e) => handliIClick(e)}>Next</button> : <button type="submit" disabled={rander === 5} onClick={handleSubmit}>Submit</button>}
        </div>
    )
}
