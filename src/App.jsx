import { useState } from "react";

import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import BookGrid from "./container/BookGrid/BookGrid";

function App() {
  const [inputValue, setInputValue] = useState("");

  const submitHandler = (value) => {
    setInputValue(value);
  };

  return (
    <>
      {!inputValue && <Header />}
      {!inputValue && <SearchBar onSearchBar={submitHandler} />}
      {inputValue && <BookGrid inputData={inputValue} />}
    </>
  );
}

export default App;
