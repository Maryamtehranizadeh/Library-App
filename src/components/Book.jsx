import React from "react";
import styles from "./Book.module.css";
import { books } from "../constants/mockData.js";

function Book() {
  return (
    <div className={styles.main}>
      <img src="../src/assets/1.png" alt="Cover" />
      <div>
        <h4>Things fall apart</h4>
        <p>Higua Achebe</p>
        <div>
          <span>English</span>
          <span>209 Pages</span>
        </div>
      </div>
    </div>
  );
}

export default Book;
