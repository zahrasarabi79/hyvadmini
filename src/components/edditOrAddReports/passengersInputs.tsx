import { Stack, Button, Typography, Grid } from "@mui/material";
import { useState } from "react";
import { CssTextField } from "./TextFildCustom";
import { AiOutlinePlus } from "react-icons/ai";
import PassengerCard from "./passengercard";
import { IContract, IPassengersInputs } from "../interface/Interfaces";

const PassengersInputs: React.FC<IPassengersInputs> = ({ contract, updateContract, setPassengersError, passengersError }) => {
  const [newPassenger, setNewPassenger] = useState("");

  const handleAddPassenger = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    newPassenger.trim() === "" ? setPassengersError(true) : setPassengersError(false);
    const updatedContract: IContract = {
      ...contract,
      passengers: [...contract.passengers, newPassenger],
    };
    updateContract(updatedContract);
    setNewPassenger("");
  };

  const handleDeletePassenger = (passengerIndex: number) => {
    const updatedPassengers: string[] = contract.passengers.filter((_, index: number) => index !== passengerIndex);
    const updatedContract: IContract = {
      ...contract,
      passengers: updatedPassengers,
    };
    updateContract(updatedContract);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewPassenger(e.target.value);
    setPassengersError(false);
  };

  return (
    <Stack dir="rtl" spacing={2}>
      <Typography variant="h5" color="white" sx={{ borderBottom: " 1px solid white", mb: 2, pb: 2 }}>
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
        <Button onClick={handleAddPassenger} color="secondary" variant="contained" sx={{ borderRadius: 2, width: 60, height: 60 }}>
          <AiOutlinePlus fontSize="30" />
        </Button>
      </Stack>

      <Grid container gap={2}>
        {contract?.passengers?.map((passenger: string, index: number) => (
          <PassengerCard key={index} passengername={passenger} onDelete={() => handleDeletePassenger(index)} />
        ))}
        {/* {newPassenger.trim() !== "" && <PassengerCard passengername={newPassengeri} />} */}
      </Grid>
    </Stack>
  );
};

export default PassengersInputs;
