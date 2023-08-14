import { Stack, Button } from "@mui/material";
import Report from "./Report";
import { useParams } from "react-router-dom";
import { useEffect } from "react";

const ReportCard = ({ contract, report, setReport, updateContract }: any) => {
  const { id } = useParams();
  const handleChange = (e: any, index: number, value: string) => {
    !!report[index] && (report[index][value] = e.target.value);
    setReport([...report]);
  };

  // const handleDeleteReport = (reportIndex: any) => {
  //   const updatedReports = report.filter((item: any, index: any) => {
  //     // console.log(item["costTitle"]);

  //     return index !== reportIndex && item["costTitle"] !== "";
  //   });

  //   setReport([]);
  //   setReport([...updatedReports]);

  //   const updatedContract = {
  //     ...contract,
  //     report: [...report],
  //   };
  //   updateContract(updatedContract);
  // };

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
      ...prev.filter((item: any) => item["number"] !== ""),
    ]);
    const updatedContract = {
      ...contract,
      report,
    };
    updateContract(updatedContract);
  };

  return (
    <Stack sx={{ padding: 2, gap: 2 }}>
      {report.map((item: any, index: any) => (
        <Report
          key={index}
          index={index}
          item={item}
          handleChange={handleChange}
          setReport={setReport}
          contract={contract}

          // onDelete={() => handleDeleteReport(index)}
        />
      ))}

      <Button onClick={handelAddRow} variant="contained" color="primary" sx={{ fontSize: 20 }}>
        افزودن گزارش
      </Button>
    </Stack>
  );
};

export default ReportCard;
