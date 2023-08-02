import { Box, Grid, Stack, Typography } from "@mui/material";
import ContractInfoInputs from "./ContractInfoInputs";
import PassengersInputs from "./passengersInputs";

const FormContractInputs = () => {
  return (
    <Grid item xs={9}>
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
        Contract Information
      </Typography>

      <Box
        sx={{
          bgcolor: "#312e81",
          py: 2,
          borderBottomLeftRadius: 6,
          borderBottomRightRadius: 6,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Stack sx={{ p: 2, gap: 2, borderRadius: 4 }}>
          <Typography variant="h4" sx={{ color: "white", textAlign: "center", p: 2 }}>
            گزارش خرید و فروش هیواد پرواز کیش
          </Typography>
          <ContractInfoInputs />
          <PassengersInputs />
        </Stack>
      </Box>
    </Grid>
  );
};

export default FormContractInputs;
