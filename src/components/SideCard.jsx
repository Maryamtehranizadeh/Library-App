import styles from "./SideCard.module.css";
import React from "react";

function SideCard({ data }) {
  return (
    <div className={styles.card}>
      <img src={data.image} alt="Cover" />
      <p>{data.title}</p>
    </div>
  );
}

export default SideCard;
