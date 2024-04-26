import React, { useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  localStorage.setItem("login", "failed");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === "user@example.com" && password === "password") {
      setError("");
      localStorage.setItem("login", "success");
      alert("Login successful!");
      navigate("/home"); // Navigate to the home page
    } else {
      setError("Invalid email or password");
      localStorage.setItem("login", "failed");
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <div
        style={{
          border: "2px solid #4285f4",
          padding: "20px",
          borderRadius: "25px",
          marginBottom: "20px",
          height: "450px",
        }}
      >
        <p style={{ color: "#4285f4", marginBottom: "20px" }}>
          dummy id: user@example.com ,password: password
        </p>

        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            label="Password"
            type="password"
            fullWidth
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <Typography variant="body2" color="error">
              {error}
            </Typography>
          )}
          <div style={{ display: "flex", justifyContent: "center" }}>
            <Button
              type="submit"
              variant="contained"
              sx={{ mt: 2, width: "200px" }}
            >
              Login
            </Button>
          </div>
        </form>

        <Typography variant="body1" sx={{ mt: 2, textAlign: "center" }}>
          You do not have an account? <a href="/signup">Sign up</a>
        </Typography>
      </div>
    </Container>
  );
};

export default LoginPage;
