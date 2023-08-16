import { Stack, Button } from "@mui/material";
import Report from "./Report";
import { useParams } from "react-router-dom";
import { useState } from "react";
// const [newState, setNewState] = useState([]);
// console.log(newState);

const ReportCard = ({
  contract,
  report,
  setReport,
  updateContract,
  reportError,
  setReportError,
}: any) => {
  const { id } = useParams();
  const handleChange = (e: any, index: number, value: string) => {
    !!report[index] && (report[index][value] = e.target.value);
    setReport([...report]);
    setReportError((prevStates) => {
      const newState = [...prevStates];
      newState[index][value] =report[index][value].trim() === "" ? true : false;
      return newState;
    });
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
      ...prev.filter((item: any) => item["number"] !== ""),
    ]);
    setReportError((prev: any) => [
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
          reportError={reportError[index]}
          setReportError={setReportError}
        />
      ))}

      <Button onClick={handelAddRow} variant="contained" color="primary" sx={{ fontSize: 20 }}>
        افزودن گزارش
      </Button>
    </Stack>
  );
};

export default ReportCard;

// const handleDeleteReport = (reportIndex: any) => {
//   const updatedReports = report.filter((item: any, index: any) => {
//     // console.log(item["costTitle"]);

//     return index !== reportIndex && item["costTitle"] !== "";
//   });

// };
