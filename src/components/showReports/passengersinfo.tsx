import { Stack, Typography } from "@mui/material";
import Passenger from "./passenger";

const PassengersInfo = ({ passengers }: any) => {
  return (
    <Stack direction={"row"} sx={{ justifyContent: "right", px: 10, py: 4, borderRadius: 2, gap: 1, border: "1px solid #3b82f6" }}>
      {passengers?.map((passengerObj: any) => <Passenger key={passengerObj.id} passenger={passengerObj.passenger} /> )}

      <Typography component="span" sx={{ fontSize: 20 }}>
        :مسافران
      </Typography>
    </Stack>
  );
};

export default PassengersInfo;
