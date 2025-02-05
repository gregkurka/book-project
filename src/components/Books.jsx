/* TODO - add your code to create a functional React component that displays all of the available books in the library's catalog. Fetch the book data from the provided API. Users should be able to click on an individual book to navigate to the SingleBook component and view its details. */
import React from "react";
import BookCard from "./BookCard";

function Books({ bookList }) {
  console.log(bookList);
  return (
    <>
      <h1>Library Book List</h1>
      <div className="book-list">
        {bookList.map((book) => {
          return <BookCard key={book.id} book={book} />;
        })}
      </div>
    </>
  );
}

export default Books;
