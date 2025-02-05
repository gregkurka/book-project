import React from "react";
import { useNavigate } from "react-router-dom";

function BookCard({ book }) {
  const navigate = useNavigate();
  const handleClickDetails = (e) => {
    navigate(`/books/${book.id}`);
  };
  const handleClickCheckOut = (e) => {
    console.log("Time to checkout!");
  };
  return (
    <div className="book-card">
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <img src={book.coverimage} />
      <button onClick={handleClickDetails}>See Details</button>
      <button onClick={handleClickCheckOut}>Check Out</button>
    </div>
  );
}

export default BookCard;
