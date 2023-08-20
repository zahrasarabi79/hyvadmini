import { Stack, Typography } from "@mui/material";
import Report from "./report";
import { IReportApiResponse, IReportsInfo } from "../interface/Interfaces";

const ReportsInfo: React.FC<IReportsInfo> = ({ reports }) => {
  return (
    <Stack sx={{ px: 2, py: 4, borderRadius: 2, gap: 1 }}>
      <Typography dir="rtl" variant="h5" sx={{ color: "white", pb: 2, borderBottom: "1px solid #3b82f6", mb: 5 }}>
        گزارش خرید /فروش
      </Typography>

      {reports?.map((report: IReportApiResponse) => (
        <Report key={report.id} report={report} />
      ))}
    </Stack>
  );
};

export default ReportsInfo;
