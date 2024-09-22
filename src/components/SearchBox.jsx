import { SlMagnifier } from "react-icons/sl";
import styles from "./SearchBox.module.css";

function SearchBox({ search, setSearch, searchHandler }) {
  return (
    <div className={styles.search}>
      <input
        onKeyDown={(e) => e.keyCode === 13 && searchHandler()}
        onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
        type="text"
        placeholder="Search the title here"
        value={search}
      />
      <button onClick={searchHandler}>
        <SlMagnifier />
      </button>
    </div>
  );
}

export default SearchBox;
