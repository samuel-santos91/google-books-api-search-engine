import { useState } from "react";

import styles from "./SearchBar.module.scss";

const SearchBar = ({ onSearchBar }) => {
  const [searchedWord, setSearchedWord] = useState("");

  const inputHandler = (e) => {
    setSearchedWord(e.target.value);
  };

  const dataHandler = (e) => {
    e.preventDefault();
    onSearchBar(searchedWord);
    setSearchedWord("");
  };

  return (
    <form onSubmit={dataHandler}>
      <input onChange={inputHandler} type="text" value={searchedWord} />
      <button type="submit">SEARCh</button>
    </form>
  );
};

export default SearchBar;
