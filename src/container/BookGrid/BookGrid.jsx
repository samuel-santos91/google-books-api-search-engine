import { useState, useEffect } from "react";
import BeatLoader from "react-spinners/BeatLoader";

import BookCard from "../../components/BookCard/BookCard";
import BookDetails from "../../components/BookDetails/BookDetails";
import BookGridHeader from "../../components/BookGridHeader/BookGridHeader";
import BookGridFooter from "../../components/BookGridFooter/BookGridFooter";

import styles from "./BookGrid.module.scss";
import googleBooks from "../../services/books";

const BookGrid = ({ inputData, onGrid }) => {
  const [books, setBooks] = useState("");
  const [bookIndex, setBookIndex] = useState("");
  const [pageNumber, setPageNumber] = useState("0");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const fetchedBooks = await googleBooks(
          `https://www.googleapis.com/books/v1/volumes?q=${inputData}&startIndex=${pageNumber}&maxResults=30`
        );
        setBooks(fetchedBooks);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [pageNumber]);

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

      {!loading && error && (
        <p className={styles["error-message"]}>{error.message}</p>
      )}
      {loading && (
        <BeatLoader
          size={20}
          color="#D6AD60"
          loading={loading}
          className={styles["loader"]}
        />
      )}

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

      <BookGridFooter
        onFooterReturn={(value) => {
          onGrid("");
          setBooks(value);
        }}
        onFooterPages={(page) => setPageNumber(page)}
      />
    </div>
  );
};

export default BookGrid;
