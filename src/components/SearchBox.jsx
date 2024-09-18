import { SlMagnifier } from "react-icons/sl";

function SearchBox() {
  return (
    <div>
      <input type="text" placeholder="Search" />{" "}
      <button>
        <SlMagnifier />
      </button>
    </div>
  );
}

export default SearchBox;
