import { AiFillHeart } from "react-icons/ai";
import { useState } from "react";

import styles from "./BookCard.module.css";

function BookCard({ handleLiked, data }) {
  const { author, title, language, pages, image } = data;
  const [like, setLike] = useState(false);

  const likeHandler = () => {
    handleLiked(data, like);
    setLike((like) => !like);
  };
  return (
    <div className={styles.card}>
      <img src={image} alt="Cover" />
      <div className={styles.info}>
        <h3>{title}</h3>
        <p>{author}</p>
        <div>
          <span>{language}</span>
          <span>{pages}</span>
        </div>
      </div>
      <button onClick={likeHandler}>
        <AiFillHeart
          cursor="pointer"
          fontSize="1.8rem"
          color={like ? "red" : "#e0e0e0"}
        />
      </button>
    </div>
  );
}

export default BookCard;
