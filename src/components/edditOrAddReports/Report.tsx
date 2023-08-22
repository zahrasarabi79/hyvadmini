import { CardActions, CardContent, Grid, Stack } from "@mui/material";
import { CssTextField } from "./TextFildCustom";
import { Button, Card } from "@mui/material";
import { IReport, IReportcomponent } from "../interface/Interfaces";

const Report: React.FC<IReportcomponent> = ({ index, item, handleChange, setReport, reportError }) => {
  const onDelete = () => {
    setReport((prev: IReport[]) => [...prev.filter((item: IReport, i: number) => i !== index && item["number"] !== "")]);
  };
  return (
    <Grid item xs={12}>
      <Card sx={{ border: "1px solid rgba(43, 154, 255, 1)", borderRadius: 2 }}>
        <CardContent>
          {" "}
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <CssTextField
                label="تعداد"
                fullWidth
                value={item.number}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, index, "number")}
                type="number"
                error={reportError?.number}
                helperText={reportError?.number ? "تعداد را وارد کنید" : ""}
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
                helperText={reportError?.costTitle ? "تعداد را وارد کنید" : ""}
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
                helperText={reportError?.presenter ? "تعداد را وارد کنید" : ""}
                required
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <CssTextField
                label="بانک"
                fullWidth
                value={item.bank}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, index, "bank")}
                error={reportError?.bank}
                helperText={reportError?.bank ? "تعداد را وارد کنید" : ""}
                required
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <CssTextField
                label="هزینه ها"
                fullWidth
                value={item.payments}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, index, "payments")}
                error={reportError?.payments}
                helperText={reportError?.payments ? "تعداد را وارد کنید" : ""}
                required
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <CssTextField
                label="تاریخ"
                fullWidth
                value={item.datepayment}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, index, "datepayment")}
                error={reportError?.datepayment}
                helperText={reportError?.datepayment ? "تعداد را وارد کنید" : ""}
                required
              />
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button onClick={onDelete} variant="contained" color="error">
            delete
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};
export default Report;
