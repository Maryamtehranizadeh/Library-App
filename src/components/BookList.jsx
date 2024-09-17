import React from "react";
import styles from "./BookList.module.css";
import Book from "./Book";

function BookList() {
  return (
    <div className={styles.main}>
      <h3>List of the books</h3>
      <Book />
    </div>
  );
}

export default BookList;
