import { useEffect, useState } from "react";
import bookLogo from "./assets/books.png";
import Books from "./components/Books";
import SingleBook from "./components/SingleBook";
import Login from "./components/Login";
import axios from "axios";

import { Routes, Route, Navigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function App() {
  const [token, setToken] = useState(null);
  const [bookList, setBookList] = useState([]);

  useEffect(() => {
    async function fetchBooks() {
      axios
        .get(BASE_URL + "/books", {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          setBookList(response.data.books);
        })
        .catch((error) => {
          console.error(error);
        });
    }
    fetchBooks();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/books" element={<Books bookList={bookList} />} />
        <Route path="/" element={<Navigate to="/books" />} />
        <Route path="/books/:id" element={<SingleBook />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Navigate to="/login" />} />
      </Routes>
    </>
  );
}

export default App;
