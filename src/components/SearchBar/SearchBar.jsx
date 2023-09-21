import { useState } from "react";

import searchImage from "../../assets/icons/search.png";
import styles from "./SearchBar.module.scss";

const SearchBar = ({ onSearchBar }) => {
  const [searchedWord, setSearchedWord] = useState("");

  const inputHandler = (e) => {
    setSearchedWord(e.target.value);
  };

  const dataHandler = (e) => {
    e.preventDefault();
    onSearchBar(searchedWord.split(" ").join("+"));
    setSearchedWord("");
  };

  return (
    <form className={styles["form-section"]} onSubmit={dataHandler}>
      <input
        className={styles["form-section__input"]}
        onChange={inputHandler}
        type="text"
        placeholder="Search For Word or Term..."
        value={searchedWord}
      />
      <button className={styles["form-section__btn"]} type="submit">
        <img
          className={styles["form-section__btn--image"]}
          src={searchImage}
          alt="search icon"
        />
      </button>
    </form>
  );
};

export default SearchBar;
