import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.intro}>
      <h1 className={styles["intro__title"]}>
        Google <span className={styles["intro__title--highlight"]}>Books</span>
      </h1>
      <p className={styles["intro__sub-title"]}>
        Your{" "}
        <span className={styles["intro__sub-title--highlight"]}>favourite</span>{" "}
        book within a click!
      </p>
    </header>
  );
};

export default Header;
