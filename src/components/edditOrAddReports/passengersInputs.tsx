import { Stack, TextField } from "@mui/material";

const PassengersInputs = () => {
  return (
    <Stack direction={"row"} sx={{ justifyContent: "center", gap: 50 }}>
      <TextField
        sx={{
          "& .MuiInputBase-input.MuiOutlinedInput-input": {
            border: "1px solid #3b82f6",
            borderRadius: 2,
            width: 500,
          },
          "& .MuiFormLabel-root.MuiInputLabel-root": {
            color: "#3b82f6",
            bgcolor: "#312e81",
            fontSize: 16,
          },
        }}
        label="تاریخ قرارداد"
        dir="rtl"
      />
      <TextField
        sx={{
          "& .MuiInputBase-input.MuiOutlinedInput-input": {
            border: "1px solid #3b82f6",
            borderRadius: 2,
            width: 500,
          },
          "& .MuiFormLabel-root.MuiInputLabel-root": {
            color: "#3b82f6",
            bgcolor: "#312e81",
            fontSize: 16,
          },
        }}
        label="شماره قرارداد"
        dir="rtl"
      />
    </Stack>
  );
};

export default PassengersInputs;
