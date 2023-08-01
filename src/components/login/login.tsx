import { Button, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import axiosInstance from "../axios/axiosInstance";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState("");

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const inputValue = new FormData(event.currentTarget);
    const user = {
      username: inputValue.get("username"),
      password: inputValue.get("password"),
    };
    await getResponse(user);
  };
  const getResponse = async (user: any) => {
    try {
      const res = await axiosInstance.post("/login", user);
      await getToken(res);
    } catch (error: any) {
      if (error.response.status === 401) {
        console.log("401 error");
      }
      if (error.response.status === 400) {
        console.log("400 error");
      }
    }
  };
  const getToken = async (response: any) => {
    setToken(response.data.token);
  };

  useEffect(() => {
    if (token) {
      localStorage.setItem("myToken", token);
      navigate("/dashboardd");
    }
  }, [token]);

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          bgcolor: "rgba(255, 255, 255, 0.4)",
        }}
      >
        <Typography component="h1" variant="h5">
          Login In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="username"
            name="username"
            color="warning"
            autoComplete="username"
            autoFocus
          />

          <TextField
            color="warning"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button type="submit" color="secondary" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Log In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
export default LogIn;
