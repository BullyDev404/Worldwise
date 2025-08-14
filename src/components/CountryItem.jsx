/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import twemoji from "twemoji";

import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  const { country: name, emoji } = country;
  console.log(name, emoji);

  const emojiRef = useRef(null);

  useEffect(() => {
    twemoji.parse(emojiRef.current, {
      folder: "svg",
      ext: ".svg",
    });
  }, [emoji]);

  return (
    <li className={styles.countryItem}>
      <span ref={emojiRef} className={styles.emoji}>
        {emoji}
      </span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
