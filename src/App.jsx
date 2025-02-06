import { useEffect, useState } from "react";
import bookLogo from "./assets/books.png";
import Books from "./components/Books";
import SingleBook from "./components/SingleBook";
import Login from "./components/Login";
import Navigations from "./components/Navigations";
import ProtectedRoute from "./components/ProtectedRoute";
import Account from "./components/Account";
import Register from "./components/Register";

import axios from "axios";

import { Routes, Route, Navigate } from "react-router-dom";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function App() {
  const [token, setToken] = useState(null);
  const [bookList, setBookList] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!token) return; // Only run if a token exists

    axios
      .get(BASE_URL + "/users/me", {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        console.log("User Data:", response.data);
        setUser(response.data);
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
      });
  }, [token]);

  useEffect(() => {
    const localToken = localStorage.getItem("token");
    if (localToken) {
      setToken(localToken);
    }
  }, []);

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
      <Navigations user={user} />
      <Routes>
        <Route path="/books" element={<Books bookList={bookList} />} />
        <Route path="/" element={<Navigate to="/books" />} />
        <Route path="/books/:id" element={<SingleBook bookList={bookList} />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/register" element={<Register setToken={setToken} />} />
        <Route element={<ProtectedRoute token={token} />}>
          <Route path="/account" element={<Account user={user} />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
