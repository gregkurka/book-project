/* TODO - add your code to create a functional React component that renders details for a single book. Fetch the book data from the provided API. You may consider conditionally rendering a 'Checkout' button for logged in users. */
import React from "react";
import { useParams } from "react-router-dom";

function SingleBook({ bookList }) {
  const { id } = useParams();
  const book = bookList.find((b) => b.id == id);

  if (!book) {
    return <div>Book not found</div>;
  }

  return (
    <>
      <h2 className="big-title">Single Book</h2>
      <div className="single-book">
        <div className="book-card">
          <h2>{book.title}</h2>
          <h3>{book.author}</h3>
          <img src={book.coverimage} />
          <p>{book.description}</p>
          <button>Check Out</button>
        </div>
      </div>
    </>
  );
}

export default SingleBook;
