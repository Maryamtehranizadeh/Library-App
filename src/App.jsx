import React from "react";
import Header from "./components/Header";
import Search from "./components/Search";
import BookList from "./components/BookList";

function App() {
  return (
    <div>
      <Header />
      <Search />
      <BookList/>
    </div>
  );
}

export default App;
