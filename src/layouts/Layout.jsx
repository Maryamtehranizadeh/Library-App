import React from "react";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Book App</h1>
        <p>
          <a href="https://botostart.ir">BotoStart</a> | React.js
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Mary with 🧡</p>
      </footer>
    </>
  );
}

export default Layout;
