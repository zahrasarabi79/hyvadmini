import { Grid, Typography } from "@mui/material";
const PassengerCard = ({ passengername }: any) => {
  // console.log(passengername);

  return (
    <Grid
      item
      sx={{
        bgcolor: "#4338ca",
        padding: 2,
        borderRadius: 2,
        textAlign: "center",
        mb: 5,
      }}
    >
      <Typography variant="body1" color="white">
        {passengername}
      </Typography>
    </Grid>
  );
};

export default PassengerCard;
