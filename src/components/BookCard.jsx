import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function BookCard({
  book,
  token,
  userReservations,
  resetReservations,
  setResetReservations,
}) {
  const [isAvailable, setIsAvailable] = useState(book.available);
  const [userReserved, setUserReserved] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const isBookReserved = userReservations.some(
      (item) => item.title === book.title
    );
    setUserReserved(isBookReserved);
  }, [userReservations]);

  const handleClickDetails = (e) => {
    navigate(`/books/${book.id}`);
  };

  const handleClickCheckOut = (e) => {
    axios
      .patch(
        `${BASE_URL}/books/${book.id}`,
        { available: false },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        setIsAvailable(false);
        setResetReservations((prev) => prev + 1);

        setUserReserved(true);
      })
      .catch(console.error);
  };

  const handleClickReturn = (e) => {
    const index = userReservations.findIndex(
      (item) => item.title === book.title
    );

    axios
      .delete(`${BASE_URL}/reservations/${userReservations[index].id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setIsAvailable(true);
        setUserReserved(false);
        setResetReservations((prev) => prev + 1);
      })
      .catch(console.error);
  };

  return (
    <div className="book-card">
      <h2>{book.title}</h2>
      <h3>{book.author}</h3>
      <img src={book.coverimage} />
      {userReserved ? (
        <>
          <strong style={{ color: "purple" }}>You have this Checked Out</strong>
          <button onClick={handleClickReturn}>Return Book</button>
        </>
      ) : (
        <>
          <div className="is-available">
            {isAvailable ? (
              <strong style={{ color: "green" }}>Available</strong>
            ) : (
              <strong style={{ color: "red" }}>Checked Out</strong>
            )}
          </div>
          <button onClick={handleClickDetails}>See Details</button>
          {isAvailable && (
            <button onClick={handleClickCheckOut}>Check Out</button>
          )}
        </>
      )}
    </div>
  );
}

export default BookCard;
