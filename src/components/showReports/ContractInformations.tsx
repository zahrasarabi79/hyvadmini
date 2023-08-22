import { Grid, Stack, Typography } from "@mui/material";
import { IContractInformations } from "../interface/Interfaces";

const ContractInformations: React.FC<IContractInformations> = ({ contract }) => {
  return (
    <Grid
      dir="rtl"
      container
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        p: 2,
        borderRadius: 2,
        border: "1px solid #3b82f6",
      }}
    >
      <Grid item xs={12} lg={4}>
        <Stack direction={"row"} gap={1}>
          <Typography component="span" sx={{ fontSize: 20 }}>
            تاریخ قراداد :
          </Typography>
          <Typography component="span" sx={{ fontSize: 20 }}>
            {contract?.dateContract}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Stack direction={"row"} gap={1}>
          <Typography component="span" sx={{ fontSize: 20 }}>
            شماره قراداد :
          </Typography>
          <Typography component="span" sx={{ fontSize: 20 }}>
            {contract?.numContract}
          </Typography>
        </Stack>
      </Grid>
      <Grid item xs={12} lg={4}>
        <Stack direction={"row"} gap={1}>
          <Typography component="span" sx={{ fontSize: 20 }}>
            نوع گزارش :
          </Typography>
          <Typography component="span" sx={{ fontSize: 20 }}>
            {contract?.typeReport}
          </Typography>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default ContractInformations;
