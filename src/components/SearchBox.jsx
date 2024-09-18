import { SlMagnifier } from "react-icons/sl";

function SearchBox() {
  const changeHandler = (event) => {
    const input = event.target.value;
    
  };
  return (
    <div>
      <input onChange={changeHandler} type="text" placeholder="Search" />
      <button>
        <SlMagnifier />
      </button>
    </div>
  );
}

export default SearchBox;
