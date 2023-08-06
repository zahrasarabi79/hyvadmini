import { Stack, Button, Typography } from "@mui/material";
import { CssTextField } from "./TextFildCustom";
import { AiOutlinePlus } from "react-icons/ai";
import PassengerCard from "./passengercard";
import { useState } from "react";
import { Grid } from "@mui/joy";

const PassengersInputs = ({ contract, updateContract }: any) => {
  const [newPassenger, setNewPassenger] = useState("");

  const handleAddPassenger = (e: any) => {
    e.preventDefault();
    if (newPassenger.trim() !== "") {
      const updatedContract = {
        ...contract,
        passengers: [...contract.passengers, newPassenger],
      };
      updateContract(updatedContract);
      setNewPassenger("");
    }
  };

  return (
    <Stack dir="rtl" spacing={2}>
      <Typography
        variant="h5"
        color="white"
        sx={{ borderBottom: " 1px solid white", mb: 2, pb: 2 }}
      >
        اطلاعات مسافران
      </Typography>
      <Stack direction={"row"} sx={{ gap: 3 }}>
        <CssTextField
          dir="rtl"
          label={"مسافران"}
          value={newPassenger}
          onChange={(e: any) => setNewPassenger(e.target.value)}
        />
        <Button
          onClick={handleAddPassenger}
          color="secondary"
          variant="contained"
          sx={{ borderRadius: 2 }}
        >
          <AiOutlinePlus fontSize="30" />
        </Button>
      </Stack>
      <Grid container gap={2}>
        {contract.passengers.map((passenger: any, index: any) => (
          <PassengerCard key={index} passengername={passenger} />
        ))}
        {newPassenger.trim() !== "" && <PassengerCard passengername={newPassenger} />}
      </Grid>
    </Stack>
  );
};

export default PassengersInputs;
