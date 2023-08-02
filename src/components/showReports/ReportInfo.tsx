import { Stack, Typography } from "@mui/material";
import Report from "./report";

const ReportsInfo = ({ reports }: any) => {
  return (
    <Stack sx={{ justifyContent: "center", px: 2, py: 4, borderRadius: 2, gap: 1 }}>
      <Typography
        variant="h5"
        sx={{ color: "white", textAlign: "right", pb: 2, borderBottom: "1px solid #3b82f6", mb: 5 }}
      >
        گزارش خرید /فروش
      </Typography>
      {reports?.map((report: any) => (
        <Report key={report.id} report={report} />
      ))}
    </Stack>
  );
};

export default ReportsInfo;
