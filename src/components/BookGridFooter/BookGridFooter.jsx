import { useState, useEffect } from "react";

import styles from "./BookGridFooter.module.scss";

import icon from "../../assets/icons/return.png";
import arrow from "../../assets/icons/arrow.png";

const BookGridFooter = ({ onFooterReturn, onFooterPages }) => {
  const [count, setCount] = useState(0);

  const increaseHandler = () => {
    setCount(count + 30);
  };

  const decreaseHandler = () => {
    if (count > 0) {
      setCount(count - 30);
    } else return;
  };

  useEffect(() => {
    onFooterPages(count.toString());
  }, [count]);

  return (
    <footer className={styles.footer}>
      <img
        className={styles["footer__return"]}
        src={icon}
        alt="return icon"
        onClick={() => onFooterReturn("")}
      />

      <div className={styles["footer__pages"]}>
        <img
          className={styles["footer__pages--backwards"]}
          src={arrow}
          alt="backward arrow"
          onClick={decreaseHandler}
        />
        <p>{count / 30}</p>
        <img
          className={styles["footer__pages--forwards"]}
          src={arrow}
          alt="forward arrow"
          onClick={increaseHandler}
        />
      </div>
    </footer>
  );
};

export default BookGridFooter;
