import { Button, Grid, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const WelcomeCard = () => {
  const navigate = useNavigate();

  const addReportPage = () => {
    navigate("/addOrEditReport");
  };

  
  return (
    <Grid item xs={3}>
      <Typography
        variant="body1"
        sx={{
          p: 2,
          fontSize: 20,
          color: "white",
          background: "#3b82f6",
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
        }}
      >
        Welcome
      </Typography>

      <Stack
        sx={{
          bgcolor: "#312e81",
          py: 2,
          borderBottomLeftRadius: 6,
          borderBottomRightRadius: 6,
        }}
      >
        <Typography sx={{ fontSize: 20, textAlign: "center", color: "white" }} variant="body1">
          !!!! به هیواد پرواز کیش خوش آمدید
        </Typography>
        <Button
          variant="contained"
          sx={{
            padding: 2,
            margin: 2,
            bgcolor: "#FF7A00",
            boxShadow: "none",
            fontSize: 20,
          }}
          onClick={addReportPage}
        >
          add Report
        </Button>
      </Stack>
    </Grid>
  );
};

export default WelcomeCard;
