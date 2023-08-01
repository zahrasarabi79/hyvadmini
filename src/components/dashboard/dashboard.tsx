import { Grid, Container } from "@mui/material";
import WelcomeCard from "./welcomecard";
import ListOfContracts from "./listOFContracts";

const Dashboard = () => {
  return (
    <Container maxWidth={false} sx={{ m: 3, width: "auto" }}>
      <Grid container spacing={3}>
        <ListOfContracts />
        <WelcomeCard />
      </Grid>
    </Container>
  );
};

export default Dashboard;
