import TextField from "@mui/material/TextField";

import { styled } from "@mui/material";

export const CssTextField = styled(TextField)({
  width: 500,
  input: { color: "white" },

  // when focuse lable become red
  "& label.Mui-focused": {
    color: "#3b82f6",
    fontSize: 20,
    background: "#312e81",
  },
  "& label": {
    color: "#3b82f6",
    fontSize: 20,
  },
  "&:hover label.Mui-focused": {
    color: "#3b82f6",
  },
  "&:hover label": {
    color: "#3b82f6",
  },
  "& lable": {
    color: "#3b82f6",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#3b82f6",
      borderRadius: 10,
    },
    "&:hover fieldset": {
      borderColor: "#3b82f6",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#3b82f6",
    },
    "& MuiFormLabel-root .MuiInputLabel-root .Mui-focused": {
      color: "#3b82f6",
    },
  },
});
