import { Button, Typography, Box, Container } from "@mui/material";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { CssTextField } from "../edditOrAddReports/TextFildCustom";
import axiosInstance from "../axios/axiosInstance";
import { IUser, IUserError, Token } from "../interface/Interfaces";
import { AxiosError } from "axios";

const LogIn = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [logInError, setLogInError] = useState<IUserError>({ username: false, password: false });

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
    } catch (error: AxiosError | any) {
      if (error.response.status === 401) {
        setLogInError((prevErrors) => ({ ...prevErrors, username: true, password: true }));
      }
      if (error.response.status === 400) {
        setLogInError((prevErrors) => ({ ...prevErrors, username: true, password: true }));
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
          borderRadius: 2,
          px: 4,
          py: 6,
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid #3b82f6",
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
            helperText={logInError.username ? "نام کاربری را مجددا وارد کنید" : ""}
            error={logInError.username}
            onChange={() => setLogInError((prevErrors) => ({ ...prevErrors, username: false }))}
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
            helperText={logInError.password ? "پسورد را مجددا وارد کنید" : ""}
            error={logInError.password}
            onChange={() => setLogInError((prevErrors) => ({ ...prevErrors, password: false }))}
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
