import styles from "./BookCard.module.scss";

const BookCard = ({ imageUrl, index, onBookCard }) => {
  return (
    <div>
      <img
        className={styles.bookCover}
        src={imageUrl}
        alt="book cover"
        onClick={() => onBookCard(index)}
      />
    </div>
  );
};

export default BookCard;
