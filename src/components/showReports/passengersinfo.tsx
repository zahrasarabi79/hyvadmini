import { Stack, Typography } from "@mui/material";
import Passenger from "./passenger";
import { IPassengersInfo, IShowpassengerComponenet } from "../interface/Interfaces";

const PassengersInfo: React.FC<IPassengersInfo> = ({ passengers }) => {
  return (
    <Stack dir="rtl" direction={"row"} sx={{ px: 10, py: 4, borderRadius: 2, gap: 1, border: "1px solid #3b82f6" }}>
      <Typography component="span" sx={{ fontSize: 20 }}>
        مسافران:
      </Typography>
      {passengers?.map((passengerObj) => (
        <Typography component="span" sx={{ fontSize: 20 }} key={passengerObj.id}>
          {passengerObj.passenger} ,
        </Typography>
      ))}
    </Stack>
  );
};

export default PassengersInfo;
