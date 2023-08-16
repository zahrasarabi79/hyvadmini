import { Stack, Button, Typography } from "@mui/material";
import { CssTextField } from "./TextFildCustom";
import { AiOutlinePlus } from "react-icons/ai";
import PassengerCard from "./passengercard";
import { useState } from "react";
import { Grid } from "@mui/material";
const PassengersInputs = ({ contract, updateContract ,setPassengersError ,passengersError}: any) => {
  const [newPassenger, setNewPassenger] = useState("");
  // const [passengersError, setPassengersError] = useState(false);
  const handleAddPassenger = (e: any) => {
    e.preventDefault();
    newPassenger.trim() === "" ? setPassengersError(true) : setPassengersError(false);
    const updatedContract = {
      ...contract,
      passengers: [...contract.passengers, newPassenger],
    };
    updateContract(updatedContract);
    setNewPassenger("");
  };

  const handleDeletePassenger = (passengerIndex: any) => {
    const updatedPassengers = contract.passengers.filter(
      (_: any, index: any) => index !== passengerIndex
    );

    const updatedContract = {
      ...contract,
      passengers: updatedPassengers,
    };

    updateContract(updatedContract);
  };
  const handleChange = (e: any) => {
    setNewPassenger(e.target.value);
    setPassengersError("");
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
          onChange={handleChange}
          helperText={passengersError ? "اسم مسافرین را وارد کنید" : ""}
          error={passengersError}
        />
        <Button
          onClick={handleAddPassenger}
          color="secondary"
          variant="contained"
          sx={{ borderRadius: 2, width: 60, height: 60 }}
        >
          <AiOutlinePlus fontSize="30" />
        </Button>
      </Stack>

      <Grid container gap={2}>
        {contract?.passengers?.map((passenger: any, index: any) => (
          <PassengerCard
            key={index}
            passengername={passenger}
            onDelete={() => handleDeletePassenger(index)}
          />
        ))}
        {/* {newPassenger.trim() !== "" && <PassengerCard passengername={newPassengeri} />} */}
      </Grid>
    </Stack>
  );
};

export default PassengersInputs;
