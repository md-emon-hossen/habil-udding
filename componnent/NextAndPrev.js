import { useRouter } from "next/router";
import { useState } from "react";
import { UseFrom } from "../context/fromContext";
import styles from "../styles/NextAndPrev.module.css";

export default function NextAndPrev({ setrander, rander, loding, setloding }) {

    const router = useRouter();
    const [res, setres] = useState();


    const { fName,
        setfName,
        lName,
        setlName,
        bName,
        setbName,
        wadmit,
        setwadmit,
        faterName,
        setfaterName,
        moterName,
        setfmoterName,
        sContact,
        setsContact,
        brithregi,
        setbrithregi,
        bloodGroup,
        setbloodGroup,
        quata,
        setquata,
        residance,
        setresidance,
        gender,
        setgender,
        religion,
        setreligion,
        fOccupation,
        setfOccupation,
        mOccupation,
        setfmccupation,
        fmIncome,
        setfmIncome,
        mmIncome,
        setmmIncome,
        fpNumber,
        setfpNumber,
        mpNumber,
        setmpNumber,
        fEmail,
        setfEmail,
        mEmail,
        setmEmail,
        prCountry,
        setprCountry,
        prDivision,
        setprDivision,
        prDistrict,
        setprDistrict,
        prUpazila,
        setprUpazila,
        prUnion,
        setprUnion,
        prPost,
        setprPost,
        prVillage,
        setprVillage,
        psCountry,
        setpsCountry,
        psDivision,
        setpsDivision,
        psDistrict,
        setpsDistrict,
        psUpazila,
        setpsUpazila,
        psUnion,
        setpsUnion,
        psPost,
        setpsPost,
        psVillage,
        setpsVillage,
        familyCall,
        setfamilyCall,
        photo,
        setphoto } = UseFrom();


    const from_data = {
        fName,

        lName,

        bName,

        wadmit,

        faterName,

        moterName,

        sContact,

        brithregi,

        bloodGroup,

        quata,

        residance,

        gender,

        religion,

        fOccupation,

        mOccupation,

        fmIncome,

        mmIncome,

        fpNumber,

        mpNumber,

        fEmail,

        mEmail,

        prCountry,

        prDivision,

        prDistrict,

        prUpazila,

        prUnion,

        prPost,

        prVillage,

        psCountry,

        psDivision,

        psDistrict,

        psUpazila,

        psUnion,

        psPost,

        psVillage,

        familyCall,

        photo,

    }



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

    async function handleSubmit(e) {
        e.preventDefault();
        setloding(true);
        const res = await fetch("/api/students", {
            method: "POST",
            headers: {
                "content-Type": "application/json",
            },
            body: JSON.stringify(from_data)
        });


        const resposns = res.json();
        setres(resposns);
        console.log(res);
        setloding(false);
        router.push("/");

    }


    return (
        <div className={styles.nextandPrevWrp}>
            <button className={styles.button} disabled={rander === 1} onClick={(e) => handliDClick(e)}>Prev</button>
            {rander !== 4 ? <button className={styles.button} disabled={rander === 4} onClick={(e) => handliIClick(e)}>Next</button> : <button className={styles.button} type="submit" disabled={loding} onClick={(e) => handleSubmit(e)}>Submit</button>}
        </div>
    )

}
