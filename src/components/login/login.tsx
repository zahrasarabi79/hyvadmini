import { Button, Typography, Box, Container } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CssTextField } from "../edditOrAddReports/TextFildCustom";
import axiosInstance from "../axios/axiosInstance";
import { IUser, Token } from "../interface/Interfaces";
import { AxiosError } from "axios";

const LogIn = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const inputValue = new FormData(event.currentTarget);
    const user: IUser = {
      username: inputValue.get("username"),
      password: inputValue.get("password"),
    };
    await getResponse(user);
  };

  const getResponse = async (user: IUser) => {
    try {
      const { data } = await axiosInstance.post("/login", user);
      await getToken(data);
    } catch (error: AxiosError|any) {
      if (error.response.status === 401) {
        console.log("401 error");
      }
      if (error.response.status === 400) {
        console.log("400 error");
      }
    }
  };

  const getToken = async (response: Token) => {
    setToken(response.token);
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
          // boxShadow: 3,
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid #3b82f6",
          // bgcolor: "rgba(255, 255, 255, 0.4)",
        }}
      >
        <Typography component="h1" variant="h5">
          Log In
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <CssTextField
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

          <CssTextField
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
          <Button type="submit" color="primary" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Log In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
export default LogIn;
