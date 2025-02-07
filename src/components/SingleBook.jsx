/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import React from "react";
import { useParams } from "react-router-dom";
import BookCard from "./BookCard";

function SingleBook({
  bookList,
  token,
  userReservations,
  resetReservations,
  setResetReservations,
}) {
  const { id } = useParams();
  const book = bookList.find((b) => b.id == id);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <>
      <h2 className="big-title">Single Book</h2>
      <div className="single-book">
        <BookCard
          key={book.id}
          book={book}
          token={token}
          userReservations={userReservations}
          resetReservations={resetReservations}
          setResetReservations={setResetReservations}
        />
        <div className="single-description">
          <h2>Full Description of {book.title}:</h2>
          <p>{book.description}</p>
        </div>
      </div>
    </>
  );
}

export default SingleBook;
