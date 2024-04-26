import React, { useState } from "react";
import { Container, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignupPage = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validation
    if (!email || !name || !password) {
      setError("Please fill in all fields");
      return;
    }

    const userData = { email, name, password };
    localStorage.setItem("userData", JSON.stringify(userData));

    setEmail("");
    setName("");
    setPassword("");
    setError("");
    toast.success("Successfully signed up! ,Please login");

    setTimeout(() => {
      navigate("/");
    }, 3000);
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
        <Typography variant="h4" align="center" gutterBottom>
          Signup
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
            label="Name"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
          <Button type="submit" variant="contained" fullWidth sx={{ mt: 2 }}>
            Signup
          </Button>
        </form>
        <Typography variant="body1" sx={{ mt: 2, textAlign: "center" }}>
          You already have an account? <a href="/">Login</a>
        </Typography>
        <ToastContainer position="bottom-left" autoClose={6000} />
      </div>
    </Container>
  );
};

export default SignupPage;
