import { Button, Grid, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AddReportBtn from "../buttons/addReportBtn";
import ListPageBtn from "../buttons/goToList";

const WelcomeCard = () => {
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
        <AddReportBtn />
        <ListPageBtn />
      </Stack>
    </Grid>
  );
};

export default WelcomeCard;
