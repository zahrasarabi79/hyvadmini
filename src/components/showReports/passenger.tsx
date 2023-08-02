import { Typography } from "@mui/material";

const Passenger = ({ passenger }: any) => {
  return (
    <Typography component="span" sx={{ fontSize: 20 }} key={passenger.id}>
      ,{passenger} 
    </Typography>
  );
};

export default Passenger;
