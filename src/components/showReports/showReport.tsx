import { Container, Grid } from "@mui/material";
import WelcomeCard from "../dashboard/welcomecard";
import Contract from "./Contract";

const ShowReport = () => {
  return (
    <Container maxWidth={false} sx={{ m: 3, width: "auto" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={3}>
          <WelcomeCard />
        </Grid>
        <Grid item xs={12} lg={9}>
          <Contract />
        </Grid>
      </Grid>
    </Container>
  );
};

export default ShowReport;
