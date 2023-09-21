import styles from "./BookGridHeader.module.scss";
import icon from "../../assets/icons/close.png";

const BookGridHeader = ({ onGridHeader }) => {
  return (
    <section className={styles.header}>
      <h2 className={styles["header__title"]}>Select Book</h2>
    </section>
  );
};

export default BookGridHeader;
