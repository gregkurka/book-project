/* TODO - add your code to create a functional React component that renders a navigation bar for the different views in your single page application. You may consider conditionally rendering some options - for example 'Login' should be available if someone has not logged in yet. */
import React from "react";
import { Link } from "react-router-dom";

function Navigations({ user }) {
  return (
    <div className="header">
      <h1>Book Buddy Public Library</h1>

      <div className="nav-links">
        <Link to="/books">Book Catalogue</Link>
        {user ? (
          <Link to="/account">Welcome, {user.firstname}! </Link>
        ) : (
          <>
            <Link to="/login">Login</Link>
            or
            <Link to="/register">Register</Link>
          </>
        )}
      </div>
    </div>
  );
}

export default Navigations;
