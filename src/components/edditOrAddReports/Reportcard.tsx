import { Card, Button, CardContent, CardActions, Grid } from "@mui/material";
import Report from "./Report";
import { IContract, IReport, IReportCard, IReportError } from "../interface/Interfaces";

const ReportCard: React.FC<IReportCard> = ({ contract, report, setReport, updateContract, reportError, setReportError }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, value: string) => {
    !!report[index] && (report[index][value] = e.target.value);
    setReport([...report]);
    setReportError((prevStates: IReportError[]) => {
      const newState: IReportError[] = [...prevStates];
      newState[index][value] = report[index][value].trim() === "" ? true : false;
      return newState;
    });
  };

  const handelAddRow = () => {
    setReport((prev: IReport[]) => [
      {
        number: "",
        costTitle: "",
        presenter: "",
        bank: "",
        payments: "",
        datepayment: "",
      },
      ...prev.filter((item: IReport) => item["number"] !== ""),
    ]);
    setReportError((prev: IReportError[]) => [
      {
        number: false,
        costTitle: false,
        presenter: false,
        bank: false,
        payments: false,
        datepayment: false,
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
            <Report key={index} index={index} item={item} handleChange={handleChange} setReport={setReport} reportError={reportError[index]} />
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
