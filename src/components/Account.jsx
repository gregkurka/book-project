/* TODO - add your code to create a functional React component that renders account details for a logged in user. Fetch the account data from the provided API. You may consider conditionally rendering a message for other users that prompts them to log in or create an account.  */
import React from "react";

function Account({ user }) {
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
    </div>
  );
}

export default Account;
