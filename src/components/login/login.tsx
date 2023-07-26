import { Button, TextField, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import axiosInstance from "../axios/axiosInstance";
import { useState } from "react";

const LogIn = () => {
  const [Token, setToken] = useState(null);
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  console.log(Token);
  console.log(usernameError);
  console.log(passwordError);
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
      await checkResponse(res, user);
      const res = await axiosInstance.post("/login", user);
      console.log(res);
    } catch (error) {
      console.log("didn't get response");
    }
  };
  const checkResponse = async (res: any, user: any) => {
    if (res === 400) {
      console.log("ggggg");
      console.log(user);
      // return await checkEmptyInput(user);
    }
    if (res.status === 401) {
      // await checkInput();
    }
    if (res.status === 200) {
      setToken(res.data);
      // await getToken(response);
    }
  };
  const checkEmptyInput = async (user: any) => {
    const { username, password } = user;
    if (!username && !password) {
      setUsernameError("Please enter a username.");
      setPasswordError("Please enter a password.");
    } else if (!username) {
      setUsernameError("Please enter a username.");
      setPasswordError("");
    } else if (!password) {
      setUsernameError("");
      setPasswordError("Please enter a password.");
    }
  };
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
          <Button
            type="submit"
            color="secondary"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Log In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
export default LogIn;
