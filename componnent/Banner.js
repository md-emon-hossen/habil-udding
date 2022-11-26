import { useCallback, useEffect, useState } from 'react';
import one from '../public/1.jpg';
import two from '../public/2.jpg';
import three from '../public/3.jpg';
import four from '../public/4.jpeg';
import styles from "../styles/Banner.module.css";

export default function Banner() {
  const img = [one, two, three, four];
  const [imgValue, setimgValue] = useState(0);



  //use effect inseide function
  const stateChange = useCallback(() => {
      setimgValue((prev) => {
          if (prev === img.length - 1) {
              prev = 0;
              return prev;
          }
          return prev + 1;

      });

  }, []);

  //use Effect
  useEffect(() => {
      setInterval(stateChange, 4000)
  }, []);




  return (
      <div className={styles.bannerImgWrp}>
          <img src={img[imgValue]} alt="Banner Img" />
      </div>
  )
}
