import styles from "./BookCard.module.scss";

import img from "../../assets/images/prompt.jpeg";

const BookCard = ({imageUrl}) => {
  return (
    <div>
      <img src={imageUrl} alt="book cover" />
    </div>
  );
};

export default BookCard;
