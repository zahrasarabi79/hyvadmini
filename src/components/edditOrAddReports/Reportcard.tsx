import { Stack, Button } from "@mui/material";
import Report from "./Report";

const ReportCard = ({ contract, report, setReport, updateContract }: any) => {
  const handleChange = (e: any, index: number, value: string) => {
    !!report[index] && (report[index][value] = e.target.value);
    setReport([...report]);
  };

  const handelAddRow = () => {
    setReport((prev: any) => [
      {
        number: "",
        costTitle: "",
        presenter: "",
        bank: "",
        payments: "",
        datepayment: "",
      },
      ...prev,
    ]);
    const updatedContract = {
      ...contract,
      report: [...contract.report, report],
    };
    updateContract(updatedContract);
  };

  return (
    <Stack sx={{ padding: 2, gap: 2 }}>
      {report.map((item: any, index: any) => (
        <Report key={index} index={index} item={item} handleChange={handleChange} />
      ))}

      <Button onClick={handelAddRow} variant="contained" color="primary" sx={{ fontSize: 20 }}>
        افزودن گزارش
      </Button>
    </Stack>
  );
};

export default ReportCard;
