/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
import React from "react";
import BookCard from "./BookCard";

function Account({
  user,
  bookList,
  token,
  userReservations,
  resetReservations,
  setResetReservations,
}) {
  return (
    <div className="user-info">
      <h2>Your Account Info:</h2>
      <p>
        <strong>First Name:</strong> {user.firstname}
      </p>
      <p>
        <strong>Last Name:</strong> {user.lastname}
      </p>
      <p>
        <strong>Email:</strong> {user.email}
      </p>
      <h2>Your checked out books:</h2>
      {userReservations.map((book) => {
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
  );
}

export default Account;
