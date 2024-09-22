import React from "react";
import { useState } from "react";
import { books } from "../constants/mockData.js";
import BookCard from "./BookCard.jsx";
import SideCard from "./SideCard.jsx";
import styles from "./Books.module.css";
import SearchBox from "./SearchBox.jsx";

function Books() {
  const [liked, setLiked] = useState([]);
  const [search, setSearch] = useState([]);
  const handleLiked = (book, status) => {
    if (status) {
      const newLiked = liked.filter((i) => i.id !== book.id);
      console.log(newLiked);
      setLiked((liked) => newLiked);
    } else {
      setLiked((liked) => [...liked, book]);
    }
  };
  return (
    <>
      <SearchBox data={books} search={search} setSearch={setSearch} />
      <div className={styles.container}>
        <div className={styles.cards}>
          {books.map((book) => (
            <BookCard key={book.id} data={book} handleLiked={handleLiked} />
          ))}
        </div>
        {!!liked.length && (
          <div className={styles.favorite}>
            <h4>Favarites</h4>
            {liked.map((book) => (
              <SideCard key={book.id} data={book} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Books;
