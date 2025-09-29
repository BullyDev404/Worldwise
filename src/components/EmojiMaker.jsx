/* eslint-disable react/prop-types */
import { useEffect, useRef } from "react";
import twemoji from "twemoji";
import styles from "./CityItem.module.css";

function EmojiMaker({ emoji, className = styles.emoji }) {
  const emojiRef = useRef(null);

  useEffect(() => {
    twemoji.parse(emojiRef.current, { folder: "svg", ext: ".svg" });
  }, [emoji]);

  return (
    <span ref={emojiRef} className={className}>
      {emoji}
    </span>
  );
}

export default EmojiMaker;
