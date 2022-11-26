import styles from '../styles/Home.module.css';
import Meta from '../componnent/Meta';
import Aside from '../componnent/Aside';
import Content from '../componnent/Content';


export default function Home() {
  return (
    <div className={styles.home}>
      <Meta title="Home"name="ggsdfgsdf"content='dsgsdfgdsf'/>
      <div className={styles.container}>
      <div className={styles.asideleft}>
                <Aside />
            </div>
            <div className={styles.content}>
                <Content />
            </div>
            {/* <div className={styles.asideright}>
                <RightAsideber />
            </div> */}
        </div>
    </div>
  )
}
