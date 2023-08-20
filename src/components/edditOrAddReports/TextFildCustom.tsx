import TextField from "@mui/material/TextField";

import { styled } from "@mui/material";

export const CssTextField = styled(TextField)({
  width: 500,
  input: { color: "white" },

  "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
    WebkitAppearance: "none",
    margin: 0,
  },
  '& input[type="number"]': {
    MozAppearance: "textfield",
  },

  "& input:-webkit-autofill, & input:-webkit-autofill:hover, & input:-webkit-autofill:focus, & textarea:-webkit-autofill, & textarea:-webkit-autofill:hover, & textarea:-webkit-autofill:focus, & select:-webkit-autofill, & select:-webkit-autofill:hover, & select:-webkit-autofill:focus":
    {
      "-webkit-text-fill-color": "white",
      "-webkit-box-shadow": "0 0 0px 1000px rgba(255, 255, 255, 0.0) inset",
      transition: "background-color 5000s ease-in-out 0s",
    },

  // when focuse lable become red
  "& label.Mui-focused": {
    color: "#3b82f6",
    // fontSize: 20,
    // background: "#312e81",
  },
  "& label": {
    color: "#3b82f6",
    // fontSize: 20,
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
