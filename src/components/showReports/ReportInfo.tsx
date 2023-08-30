import { Card, CardContent, CardHeader, Grid, Stack, Typography } from "@mui/material";
import { IReportApiResponse, IReportPayment, IReportPaymentApiResponse, IReportsInfo, IShowReportComponenet } from "../interface/Interfaces";
import { borderBottom } from "@mui/system";
import React from "react";

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
    <Stack sx={{ p: 2, borderRadius: 2, alignItems: "center", justifyContent: "center", border: "1px solid #3b82f6", mb: 2 }}>
      <Grid sx={{ mb: 3 }} dir="rtl" spacing={2} container>
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
      </Grid>
      <Grid sx={{ justifyContent: "center", alignItems: "center" }} dir="rtl" spacing={2} container>
        {report.reportPayment?.map((payment: IReportPaymentApiResponse, index: number) => (
          <React.Fragment key={index}>
            <Grid item xs={12} sm={6} md={0.3}>
              {index + 1})
            </Grid>
            <Grid item xs={12} sm={6} md={4.7}>
              <Stack direction={"row"} gap={1}>
                <Typography component="span" sx={{ fontSize: 20 }}>
                  بانک/شرکاء :
                </Typography>
                <Typography component="span" sx={{ fontSize: 20 }}>
                  {payment.bank}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Stack direction={"row"} gap={1}>
                <Typography component="span" sx={{ fontSize: 20 }}>
                  تاریخ پرداخت :
                </Typography>
                <Typography component="span" sx={{ fontSize: 20 }}>
                  {payment.datepayment}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Stack direction={"row"} gap={1}>
                <Typography component="span" sx={{ fontSize: 20 }}>
                  مبلغ پرداختی :
                </Typography>
                <Typography component="span" sx={{ fontSize: 20 }}>
                  {payment.payments}
                </Typography>
              </Stack>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Stack>
  );
};
export default ReportsInfo;
