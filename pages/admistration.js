import Opinion from "../componnent/Opinion";
import imgOne from "../public/logo.png";
import styles from "../styles/AdmistrationWrp.module.css";


export default function Administration() {
    return (
        <div className={styles.admistrationWrp}>
            <Opinion name="Md Emon Hossen" job="SoftWere Engineer" img={imgOne} discrip="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, eos placeat? Laudantium quis tempore necessitatibus commodi nemo aut laboriosam odio? Eius amet non voluptates maiores sit labore earum ullam Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam sunt repudiandae saepe maxime, ullam deserunt ipsam velit illo excepturi autem rerum aut eveniet ratione, ab quisquam repellendus minus facere voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quod asperiores tempore? Eveniet ab ipsam perferendis incidunt nesciunt earum alias quam! Molestiae quis consectetur dolore eos delectus iusto repellat est." />

            <Opinion name="Imran Hossen Jowel" job="Store Cakker" img={imgOne} discrip="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, eos placeat? Laudantium quis tempore necessitatibus commodi nemo aut laboriosam odio? Eius amet non voluptates maiores sit labore earum ullam Lorem ipsum, dolor sit amet consectetur adipisicing elit. Numquam sunt repudiandae saepe maxime, ullam deserunt ipsam velit illo excepturi autem rerum aut eveniet ratione, ab quisquam repellendus minus facere voluptate! Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium quod asperiores tempore? Eveniet ab ipsam perferendis incidunt nesciunt earum alias quam! Molestiae quis consectetur dolore eos delectus iusto repellat est." />
        </div>
    )
}
