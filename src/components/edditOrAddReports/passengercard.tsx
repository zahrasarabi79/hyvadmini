import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { TiDelete } from "react-icons/ti";
const PassengerCard = ({ passengername, onDelete }: any) => {
  return (
    <Grid
      item
      sx={{
        padding: 2,
        borderRadius: 2,
        textAlign: "center",
        position: "relative",
        width: 200,
        height: 30,
        mb: 5,
      }}
    >
      <Box
        sx={{
          color: "red",
          position: "absolute",
          top: "-15px",
          left: "-12px",
          zIndex: "1",
          fontSize: 30,
        }}
        onClick={onDelete}
      >
        <TiDelete />
      </Box>

      <Passenger passengername={passengername} />
    </Grid>
  );
};

const Passenger = ({ passengername }: any) => {
  return (
    <Typography
      sx={{
        width: "100%",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: "0",
        bgcolor: "#4338ca",
        padding: 2,
        borderRadius: 2,
      }}
      variant="body1"
      color="white"
    >
      {passengername}
    </Typography>
  );
};

export default PassengerCard;
