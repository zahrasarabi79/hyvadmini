import { Card, CardContent, CardHeader, Grid, Stack, Typography } from "@mui/material";
import { IReportApiResponse, IReportsInfo, IShowReportComponenet } from "../interface/Interfaces";

const ReportsInfo: React.FC<IReportsInfo> = ({ reports }) => {
  return (
    <Card>
      <CardHeader sx={{ borderBottom: "3px solid #3b82f6 " }} dir="rtl" title=" گزارش خرید /فروش" />
      <CardContent>
        {reports?.map((report: IReportApiResponse) => (
          <Report key={report.id} report={report} />
        ))}
      </CardContent>
    </Card>
  );
};

const Report: React.FC<IShowReportComponenet> = ({ report }) => {
  return (
    <Stack sx={{ p: 2, borderRadius: 2, justifyContent: "space-between", border: "1px solid #3b82f6", mb: 2 }}>
      <Grid dir="rtl" spacing={2} container>
        <Grid item xs={12} sm={6} md={4}>
          <Stack direction={"row"} gap={1}>
            <Typography component="span" sx={{ fontSize: 20 }}>
              نوع هزینه :
            </Typography>
            <Typography component="span" sx={{ fontSize: 20 }}>
              {report.costTitle}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Stack direction={"row"} gap={1}>
            <Typography component="span" sx={{ fontSize: 20 }}>
              تعداد :
            </Typography>
            <Typography component="span" sx={{ fontSize: 20 }}>
              {report.number}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Stack direction={"row"} gap={1}>
            <Typography component="span" sx={{ fontSize: 20 }}>
              مجری :
            </Typography>
            <Typography component="span" sx={{ fontSize: 20 }}>
              {report.presenter}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Stack direction={"row"} gap={1}>
            <Typography component="span" sx={{ fontSize: 20 }}>
              بانک/شرکاء :
            </Typography>
            <Typography component="span" sx={{ fontSize: 20 }}>
              {report.bank}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Stack direction={"row"} gap={1}>
            <Typography component="span" sx={{ fontSize: 20 }}>
              تاریخ پرداخت :
            </Typography>
            <Typography component="span" sx={{ fontSize: 20 }}>
              {report.datepayment}
            </Typography>
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Stack direction={"row"} gap={1}>
            <Typography component="span" sx={{ fontSize: 20 }}>
              مبلغ پرداختی :
            </Typography>
            <Typography component="span" sx={{ fontSize: 20 }}>
              {report.payments}
            </Typography>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};
export default ReportsInfo;
