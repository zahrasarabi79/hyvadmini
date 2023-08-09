import { Container, Grid } from "@mui/material";
import WelcomeCard from "../dashboard/welcomecard";
import FormContractInputs from "./FormContractInputs";

const AddOrEditContract = () => {
  return (
    <Container maxWidth={false} sx={{ m: 3, width: "auto" }}>
      <Grid container spacing={3}>
        <FormContractInputs />
        <WelcomeCard />
      </Grid>
    </Container>
  );
};

export default AddOrEditContract;
