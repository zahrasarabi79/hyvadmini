import { CardActions, CardContent, Grid, Stack } from "@mui/material";
import { CssTextField } from "./TextFildCustom";
import { Button, Card, Typography } from "@mui/material";
import { IReport, IReportPayment, IReportcomponent } from "../interface/Interfaces";
import { AiFillDelete } from "react-icons/ai";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import React from "react";

const Report: React.FC<IReportcomponent> = ({ index, item, handleChangePaymentReport, handleChange, setReport, reportError }) => {
  const onDelete = () => {
    setReport((prev: IReport[]) => [...prev.filter((item: IReport, i: number) => i !== index && item["number"] !== "")]);
  };

  const handleAddPayment = () => {
    const updatedItem = { ...item, reportPayment: [...item.reportPayment, { bank: "", payments: "", datepayment: "" }] };
    setReport((prevReport) => {
      const updatedReport = [...prevReport];
      updatedReport[index] = updatedItem;
      return updatedReport;
    });
  };
  const handleDeletePayment = (paymentIndex: number) => {
    const updatedItem = { ...item, reportPayment: [...item.reportPayment.slice(0, paymentIndex), ...item.reportPayment.slice(paymentIndex + 1)] };
    setReport((prevReport) => {
      const updatedReport = [...prevReport];
      updatedReport[index] = updatedItem;
      return updatedReport;
    });
  };

  return (
    <Grid item xs={12}>
      <Card sx={{ border: "1px solid rgba(43, 154, 255, 1)", borderRadius: 2 }}>
        <CardContent>
          <Grid sx={{ mb: 2 }} container spacing={2}>
            <Grid item xs={12} md={4}>
              <CssTextField
                label="تعداد"
                fullWidth
                value={item.number}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, index, "number")}
                type="number"
                error={reportError?.number}
                helperText={reportError?.number ? "تعداد را به عدد وارد کنید" : ""}
                required
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <CssTextField
                label="عنوان هزینه"
                fullWidth
                value={item.costTitle}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, index, "costTitle")}
                error={reportError?.costTitle}
                helperText={reportError?.costTitle ? "عنوان هزینه را وارد کنید" : ""}
                required
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <CssTextField
                label="مجری"
                fullWidth
                value={item.presenter}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, index, "presenter")}
                error={reportError?.presenter}
                helperText={reportError?.presenter ? "مجری را وارد کنید" : ""}
                required
              />
            </Grid>
          </Grid>
          <Grid justifyContent={"center"} alignItems={"center"} container spacing={2}>
            {item.reportPayment.map((paymentItem: IReportPayment, paymentIndex: number) => (
              <React.Fragment key={paymentIndex}>
                <Grid dir="rtl" item xs={12} md={0.25}>
                  {paymentIndex + 1})
                </Grid>
                <Grid item xs={12} md={4}>
                  <CssTextField
                    label="بانک"
                    fullWidth
                    value={paymentItem.bank}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangePaymentReport(e, paymentIndex, index, "bank")}
                    error={reportError?.reportPayment[paymentIndex]?.bank}
                    helperText={reportError?.reportPayment[paymentIndex]?.bank ? "بانک را وارد کنید" : ""}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={4}>
                  <CssTextField
                    label="مبلغ پرداختی"
                    fullWidth
                    value={paymentItem.payments}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangePaymentReport(e, paymentIndex, index, "payments")}
                    error={reportError?.reportPayment[paymentIndex]?.payments}
                    helperText={reportError?.reportPayment[paymentIndex]?.payments ? "مبلغ پرداختی را وارد کنید" : ""}
                    required
                  />
                </Grid>
                <Grid item xs={12} md={3}>
                  <CssTextField
                    label="تاریخ پرداخت"
                    fullWidth
                    value={paymentItem.datepayment}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangePaymentReport(e, paymentIndex, index, "datepayment")}
                    error={reportError?.reportPayment[paymentIndex]?.datepayment}
                    helperText={reportError?.reportPayment[paymentIndex]?.datepayment ? "تاریخ پرداخت را وارد کنید" : ""}
                    required
                  />
                </Grid>
                <Grid item xs={6} sm={6} md={0.75}>
                  <Button
                    onClick={() => handleDeletePayment(paymentIndex)}
                    fullWidth
                    color="error"
                    variant="text"
                    sx={{ height: 60, width: ["100%", "100%", 60] }}
                  >
                    <AiFillDelete fontSize="35" />
                  </Button>
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
        </CardContent>
        <CardActions dir="ltr">
          <Grid dir="ltr" spacing={2} container>
            <Grid item xs={1} sm={2}>
              <Button fullWidth onClick={onDelete} variant="contained" color="error">
                delete
              </Button>
            </Grid>
            <Grid item xs={1} sm={2}>
              <Button fullWidth onClick={handleAddPayment} color="primary" variant="contained">
                <Typography variant="body1" color="white">
                  Add Payment
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </CardActions>
      </Card>
    </Grid>
  );
};
export default Report;
