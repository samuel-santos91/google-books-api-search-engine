import { useState, useEffect } from "react";

import BookCard from "../../components/BookCard/BookCard";
import BookDetails from "../../components/BookDetails/BookDetails";
import BookGridHeader from "../../components/BookGridHeader/BookGridHeader";
import BookGridFooter from "../../components/BookGridFooter/BookGridFooter";

import styles from "./BookGrid.module.scss";
// import googleBooks from "../../services/books";

import urlPrompt from "../../services/prompt.json";

const BookGrid = ({ inputData, onGrid }) => {
  const [books, setBooks] = useState("");
  const [bookIndex, setBookIndex] = useState("");

  useEffect(() => {
    // const fetchData = async () => {
    //   try {
    //     const fetchedBooks = await googleBooks(
    //       `https://www.googleapis.com/books/v1/volumes?q=${inputData}&maxResults=30`
    //     );
    //     console.log(fetchedBooks);
    //     setBooks(fetchedBooks);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    // fetchData();
    setBooks(urlPrompt.items);
  }, []);

  return (
    <div>
      <BookGridHeader />

      <section className={styles["books-display"]}>
        {books &&
          books.map((data, index) => (
            <BookCard
              key={data.id}
              imageUrl={data.volumeInfo?.imageLinks?.thumbnail}
              index={index}
              onBookCard={(indexValue) => setBookIndex(indexValue)}
            />
          ))}
      </section>

      {bookIndex !== "" && (
        <BookDetails
          image={books[bookIndex]?.volumeInfo?.imageLinks?.thumbnail}
          title={books[bookIndex]?.volumeInfo?.title}
          author={books[bookIndex]?.volumeInfo?.authors}
          description={books[bookIndex]?.volumeInfo?.description}
          published={books[bookIndex]?.volumeInfo?.publishedDate}
          pages={books[bookIndex]?.volumeInfo?.pageCount}
          backdrop={(value) => setBookIndex(value)}
        />
      )}

      {bookIndex === "" && (
        <BookGridFooter
          onGridFooter={(value) => {
            onGrid("");
            setBooks(value);
          }}
        />
      )}
    </div>
  );
};

export default BookGrid;
