import {  Button, Grid, Card, CardHeader, CardContent } from "@mui/material";
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
    <Card dir="rtl" sx={{ boxShadow: "none" }}>
      <CardHeader title="اطلاعات طرف قرارداد" sx={{ borderBottom: "3px solid #fff" }} />
      <CardContent>
        <Grid container dir="rtl" spacing={3}>
          <Grid item xs={12} md={4}>
            <CssTextField
              sx={{ width: ["100%", "100%"] }}
              dir="rtl"
              label={"مسافران"}
              value={newPassenger}
              onChange={handleChange}
              helperText={passengersError ? "اسم مسافرین را وارد کنید" : ""}
              error={passengersError}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <Button
              onClick={handleAddPassenger}
              fullWidth
              color="primary"
              variant="outlined"
              sx={{ borderRadius: 2, height: 60, width: ["100%", "100%", 60] }}
            >
              <AiOutlinePlus fontSize="35" />
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Grid container gap={1} >
              {contract?.passengers?.map((passenger: string, index: number) => (
                <PassengerCard key={index} passengername={passenger} onDelete={() => handleDeletePassenger(index)} />
              ))}
              {/* {newPassenger.trim() !== "" && <PassengerCard passengername={newPassengeri} />} */}
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PassengersInputs;
