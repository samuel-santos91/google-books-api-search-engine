import styles from "./BookDetails.module.scss";
import icon from "../../assets/icons/noImage.png";

const BookDetails = ({ image, title, author, description, backdrop }) => {
  return (
    <section>
      <div onClick={() => backdrop("")} className={styles.backdrop} />

      <div className={styles.details}>
        {image ? (
          <img
            className={styles["details__image"]}
            src={image}
            alt="book cover"
          />
        ) : (
          <div className={styles.noImage}>
            <img
              className={styles["noImage__icon"]}
              src={icon}
              alt="no image icon"
            />
          </div>
        )}
        <div className={styles["details__info"]}>
          <p>
            <span className={styles["details__info--headers"]}>Title:</span>{" "}
            <em>{title ? title : "Title not available"}</em>
          </p>
          <p>
            <span className={styles["details__info--headers"]}>Author:</span>{" "}
            <em>{author ? author : "Author not available"}</em>
          </p>
          <p>
            <span className={styles["details__info--headers"]}>
              Description:
            </span>{" "}
            <em>{description ? description : "Description not available"}</em>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
