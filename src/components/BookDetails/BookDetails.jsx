import styles from "./BookDetails.module.scss";

const BookDetails = ({ image, title, author, description, backdrop }) => {
  return (
    <section>
      <div onClick={() => backdrop("")} className={styles.backdrop} />

      <div className={styles.details}>
        <img
          className={styles["details__image"]}
          src={image}
          alt="book cover"
        />
        <div className={styles["details__info"]}>
          <p>{title}</p>
          <p>{author}</p>
          <p>{description}</p>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
