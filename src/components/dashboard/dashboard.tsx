import { Grid, Container } from "@mui/material";
import WelcomeCard from "./welcomecard";
import ListOfContracts from "./listOFContracts";

const Dashboard = () => {
  return (
    <Container maxWidth={false} sx={{ m: 3, width: "auto" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={3}>
          <WelcomeCard />
        </Grid>
        <Grid item xs={12} lg={9}>
          <ListOfContracts />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
