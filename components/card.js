import styles from "../styles/Home.module.css";
import { useState } from "react";
import Loader from "../components/loader";

export default function Card({ name, hex }) {
  const [copied, setCopied] = useState(false);

  const handleClick = () => {
    setCopied(true);
    navigator.clipboard.writeText(`#${hex}`);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  return (
    <div
      className={styles.card}
      style={{ backgroundColor: `#${hex}`, border: `5px solid #${hex}`, color: "black" }}
      onClick={handleClick}
    >
      {copied && (
        <div className={styles.copied}>
          <p>Copied to clipboard</p>
        </div>
      )}
      <h2>{name}</h2>
      <a>#{hex}</a>
    </div>
  );
}
