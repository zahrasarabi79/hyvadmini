import { Container, Grid } from "@mui/material";
import WelcomeCard from "../dashboard/welcomecard";
import FormContractInputs from "./FormContractInputs";

const AddOrEditContract = () => {
  
  return (
    <Container maxWidth={false} sx={{ m: 3, width: "auto" }}>
      <Grid container spacing={3}>
        <Grid item xs={12} lg={3}>
          <WelcomeCard />
        </Grid>
        <Grid item xs={12} lg={9}>
          <FormContractInputs />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddOrEditContract;
