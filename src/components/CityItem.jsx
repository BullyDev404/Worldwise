/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import twemoji from "twemoji";

import styles from "./CityItem.module.css";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));

function CityItem({ city }) {
  //   console.log(city);

  const { cityName, emoji, date } = city;

  const emojiRef = useRef(null);

  useEffect(() => {
    twemoji.parse(emojiRef.current, {
      folder: "svg",
      ext: ".svg",
    });
  }, [emoji]);

  return (
    <li className={styles.cityItem}>
      <span ref={emojiRef} className={styles.emoji}>
        {emoji}
      </span>
      <h3 className={styles.name}>{cityName}</h3>
      <time className={styles.date}>{formatDate(date)}</time>
      <button className={styles.deleteBtn}>&times;</button>
    </li>
  );
}

export default CityItem;
