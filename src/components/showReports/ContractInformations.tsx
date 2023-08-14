import { Grid, Stack, Typography } from "@mui/material";

const ContractInformations = ({ contract }: any) => {
  return (
    <Grid
      container
      sx={{
        px: 10,
        py: 4,
        borderRadius: 2,
        justifyContent: "space-between",
        gap: 10,
        border: "1px solid #3b82f6",
      }}
    >
      <Stack direction={"row"} gap={1}>
        <Typography component="span" sx={{ fontSize: 20 }}>
          {contract?.dateContract}
        </Typography>
        <Typography component="span" sx={{ fontSize: 20 }}>
          :تاریخ قراداد
        </Typography>
      </Stack>

      <Stack direction={"row"} gap={1}>
        <Typography component="span" sx={{ fontSize: 20 }}>
          {contract?.numContract}
        </Typography>
        <Typography component="span" sx={{ fontSize: 20 }}>
          :شماره قراداد
        </Typography>
      </Stack>
      <Stack direction={"row"} gap={1}>
        <Typography component="span" sx={{ fontSize: 20 }}>
          {contract?.typeReport}
        </Typography>
        <Typography component="span" sx={{ fontSize: 20 }}>
          :نوع گزارش
        </Typography>
      </Stack>
    </Grid>
  );
};

export default ContractInformations;
