/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import React from "react";
import BookCard from "./BookCard";

function Books({
  bookList,
  token,
  userReservations,
  resetReservations,
  setResetReservations,
}) {
  return (
    <>
      <h2 className="big-title">Library Book List</h2>
      <div className="book-list">
        {bookList.map((book) => {
          return (
            <BookCard
              key={book.id}
              book={book}
              token={token}
              userReservations={userReservations}
              resetReservations={resetReservations}
              setResetReservations={setResetReservations}
            />
          );
        })}
      </div>
    </>
  );
}

export default Books;
