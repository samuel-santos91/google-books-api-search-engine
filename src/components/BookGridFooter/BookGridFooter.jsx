import styles from "./BookGridFooter.module.scss";

import icon from "../../assets/icons/return.png";

const BookGridFooter = ({ onGridFooter }) => {
  return (
    <footer className={styles.footer}>
      <img
        className={styles["footer__img"]}
        src={icon}
        alt="return icon"
        onClick={() => onGridFooter("")}
      />
    </footer>
  );
};

export default BookGridFooter;
