import Aside from '../componnent/Aside';
import Content from '../componnent/Content';
import Meta from '../componnent/Meta';
import RightAside from '../componnent/RightAside';
import styles from '../styles/Home.module.css';


export default function Home() {
  return (
    <div className={styles.home}>
      <Meta title="Home" name="ggsdfgsdf" content='dsgsdfgdsf' />
      <div className={styles.container}>
        <div className={styles.asideleft}>
          <Aside />
        </div>
        <div className={styles.content}>
          <Content />
        </div>
        <div className={styles.asideright}>
          <RightAside />
        </div>
      </div>
    </div>
  )
}
