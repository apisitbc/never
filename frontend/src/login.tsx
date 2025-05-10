// src/Login.tsx
import axios from "axios";
import React, { useState } from "react";

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!username || !password) {
      setError("Username and password are required");
      return;
    }

    try {
      const response = await axios.post(
        "https://candidate-assignment.neversitup.com/auth/login",
        { username, password }
      );

      if (response.status === 200) {
        setSuccess("Login successful!");
      } else {
        setError(response.data.message || "Login failed");
      }
    } catch (err) {
      setError("Login error");
    }
  };

  return (
    <div
      style={{
        maxWidth: 400,
        margin: "0 auto",
        padding: 20,
        border: "1px solid #ccc",
      }}
    >
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {success && <p style={{ color: "green" }}>{success}</p>}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
