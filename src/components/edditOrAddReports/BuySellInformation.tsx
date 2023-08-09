import { Stack, Typography } from "@mui/material";
import ReportCard from "./Reportcard";

const BuySellInformation = ({ report, setReport ,contract ,updateContract }: any) => {
  return (
    <Stack dir="rtl" gap={1}>
      <Typography
        variant="h5"
        color="white"
        sx={{ borderBottom: " 1px solid white", mb: 2, pb: 2 }}
      >
        اطلاعات خرید/فروش
      </Typography>
      <ReportCard report={report} setReport={setReport} contract={contract} updateContract={updateContract} />
    </Stack>
  );
};

export default BuySellInformation;
