import { useState, useEffect } from "react";
import googleBooks from "../../data/api";

import BookCard from "../../components/BookCard/BookCard";

import styles from "./BookGrid.module.scss";

const BookGrid = ({ inputData }) => {
  const [books, setBooks] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const fetchedBooks = await googleBooks(
          `https://www.googleapis.com/books/v1/volumes?q=intitle:${inputData}+OR+inauthor:${inputData}&maxResults=20`
        );
        console.log(fetchedBooks);
        setBooks(fetchedBooks);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className={styles["books-display"]}>
      {books &&
        books.map((data) => (
          <BookCard
            key={data.id}
            imageUrl={data.volumeInfo?.imageLinks?.thumbnail}
          />
        ))}
    </section>
  );
};

export default BookGrid;
