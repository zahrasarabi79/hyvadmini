import { Card, Button, CardContent, CardActions, Grid } from "@mui/material";
import Report from "./Report";
import { IContract, IReport, IReportCard, IReportError, IReportErrorPayment, IReportPayment } from "../interface/Interfaces";

const ReportCard: React.FC<IReportCard> = ({ contract, report, setReport, updateContract, reportError, setReportError }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, value: string) => {
    !!report[index] && (report[index][value] = e.target.value);
    setReport([...report]);

    report.forEach((item: IReport, index: number) => {
      setReportError((prevStates: IReportError[]) => {
        const newState: IReportError[] = [...prevStates];
        newState[index] = newState[index] || {};
        newState[index].number = item.number.toString().trim() === "" ? true : false;
        newState[index].costTitle = item.costTitle.trim() === "" ? true : false;
        newState[index].presenter = item.presenter.trim() === "" ? true : false;
        newState[index].reportPayment = item.reportPayment.map((payment: IReportPayment) => ({
          bank: payment.bank.trim() === "" ? true : false,
          payments: payment.payments.trim() === "" ? true : false,
          datepayment: payment.datepayment.trim() === "" ? true : false,
        }));
        return newState;
      });
    });
  };

  const handleChangePaymentReport = (e: React.ChangeEvent<HTMLInputElement>, paymentIndex: number, reportIndex: number, field: string) => {
    !!report[reportIndex] && (report[reportIndex].reportPayment[paymentIndex][field] = e.target.value);
    setReport([...report]);
    report.forEach((item: IReport, index: number) => {
      setReportError((prevStates: IReportError[]) => {
        const newState: IReportError[] = [...prevStates];
        newState[index] = newState[index] || {};
        newState[index].number = item.number.toString().trim() === "" ? true : false;
        newState[index].costTitle = item.costTitle.trim() === "" ? true : false;
        newState[index].presenter = item.presenter.trim() === "" ? true : false;
        newState[index].reportPayment = item.reportPayment.map((payment: IReportPayment) => ({
          bank: payment.bank.trim() === "" ? true : false,
          payments: payment.payments.trim() === "" ? true : false,
          datepayment: payment.datepayment.trim() === "" ? true : false,
        }));
        return newState;
      });
    });
  };
  const handelAddRow = () => {
    setReport((prev: any) => [
      {
        number: "",
        costTitle: "",
        presenter: "",
        reportPayment: [{ bank: "", payments: "", datepayment: "" }],
      },
      ...prev.filter((item: IReport) => item["number"] !== ""),
    ]);
    setReportError((prev: IReportError[]) => [
      {
        number: false,
        costTitle: false,
        presenter: false,
        reportPayment: [{ bank: false, payments: false, datepayment: false }],
      },
      ...prev,
    ]);
    const updatedContract: IContract = {
      ...contract,
      report,
    };
    updateContract(updatedContract);
  };

  return (
    <Card sx={{ boxShadow: "none" }}>
      <CardContent>
        <Grid container spacing={2}>
          {report.map((item: IReport, index: number) => (
            <Report
              key={index}
              index={index}
              item={item}
              handleChangePaymentReport={handleChangePaymentReport}
              handleChange={handleChange}
              setReport={setReport}
              reportError={reportError[index]}
            />
          ))}
        </Grid>
      </CardContent>
      <CardActions>
        <Button fullWidth onClick={handelAddRow} variant="outlined" color="primary" sx={{ fontSize: 20 }}>
          افزودن گزارش
        </Button>
      </CardActions>
    </Card>
  );
};

export default ReportCard;
