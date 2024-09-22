import { SlMagnifier } from "react-icons/sl";

function SearchBox({ search, setSearch, searchHandler }) {
  return (
    <div>
      <input
        onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
        type="text"
        placeholder="Search"
        value={search}
      />
      <button onClick={searchHandler}>
        <SlMagnifier />
      </button>
    </div>
  );
}

export default SearchBox;
