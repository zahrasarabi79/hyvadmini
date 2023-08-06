import { Container, Grid } from "@mui/material";
import WelcomeCard from "../dashboard/welcomecard";
import FormContractInputs from "./FormContractInputs";
import { useParams } from "react-router-dom";

const AddOrEditContract = () => {
  const { id } = useParams();
  return (
    <Container maxWidth={false} sx={{ m: 3, width: "auto" }}>
      <Grid container spacing={3}>
        <FormContractInputs id={id} />
        <WelcomeCard />
      </Grid>
    </Container>
  );
};

export default AddOrEditContract;
