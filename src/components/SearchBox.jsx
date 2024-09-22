import { SlMagnifier } from "react-icons/sl";

function SearchBox({ data, search, setSearch }) {
  return (
    <div>
      <input onChange={setSearch(e=> e.target.value)} type="text" placeholder="Search" value={search} />
      <button>
        <SlMagnifier />
      </button>
    </div>
  );
}

export default SearchBox;
