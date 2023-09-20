import styles from "./BookCard.module.scss";
import icon from "../../assets/icons/noImage.png";

const BookCard = ({ imageUrl, index, onBookCard }) => {
  return (
    <div>
      <img
        className={imageUrl ? styles.bookCover : styles["bookCover--noImage"]}
        src={imageUrl}
        alt="book cover"
        onClick={() => onBookCard(index)}
      />
      {!imageUrl && (
        <div className={styles.noImage} onClick={() => onBookCard(index)} >
            <img className={styles["noImage__icon"]} src={icon} alt="no image icon" />
            <p className={styles["noImage__description"]}>No Image</p>
        </div>
      )}
    </div>
  );
};

export default BookCard;
