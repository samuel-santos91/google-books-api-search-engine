// import { useState, useEffect } from "react";

import BookCard from "../../components/BookCard/BookCard";

import styles from "./BookGrid.module.scss";

const BookGrid = () => {
//   const [books, setBooks] = useState("");

//   const googleBooks = async (url) => {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error("Something Went Wrong");
//     }
//     const data = await response.json();

//     setBooks(data.items);
//   };

//   useEffect(() => {
//     googleBooks("https://www.googleapis.com/books/v1/volumes?q=woman");
//   }, []);

//   console.log(books);

  return (
    <section className={styles["books-display"]}>
      {books &&
        books.map((data) => (
          <BookCard
            key={data.id}
            imageUrl={data.volumeInfo.imageLinks.thumbnail}
          />
        ))}
    </section>
  );
};

export default BookGrid;
