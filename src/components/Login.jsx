import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

import { useState } from "react";

const BASE_URL = import.meta.env.VITE_API_BASE_URL;

function Login({ setToken }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const data = await axios.post(`${BASE_URL}/users/login`, {
        email,
        password,
      });
      console.log(data.data);
      console.log(data.data.message);
      if (data.data.message) {
        console.log("Success!");
        console.log(data.data.token);
        localStorage.setItem("token", data.data.token);
        setToken(data.data.token);
        setSuccess(true);
        setEmail("");
        setPassword("");
        navigate("/books");
      }
    } catch (err) {
      console.error(err.message);
      setError(
        err.response?.data?.message || "An error occurred. Please try again."
      );
    }
  }
  return (
    <div className="login">
      <h2>Login</h2>
      {error && <p>{error}</p>}
      {success && <p>Signed Up Successfully!</p>}
      <form onSubmit={handleSubmit}>
        <label>
          <p>Email:</p>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <p>Password:</p>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="submit-button">Submit</button>
      </form>
      <p>
        First time here? Register <Link to="/register">here</Link>.
      </p>
    </div>
  );
}

export default Login;
