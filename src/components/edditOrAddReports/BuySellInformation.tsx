import { Card, CardContent, CardHeader, Stack, Typography } from "@mui/material";
import ReportCard from "./Reportcard";
import { IBuySellInformation } from "../interface/Interfaces";

const BuySellInformation: React.FC<IBuySellInformation> = ({ report, setReport, contract, updateContract, reportError, setReportError }) => {
  
  return (
    <Card dir="rtl" sx={{ boxShadow: "none" }}>
      <CardHeader title="اطلاعات خرید/فروش" sx={{ borderBottom: "3px solid #fff" }} />
      <CardContent>
        <ReportCard
          report={report}
          setReport={setReport}
          contract={contract}
          reportError={reportError}
          setReportError={setReportError}
          updateContract={updateContract}
        />
      </CardContent>
    </Card>
  );
};

export default BuySellInformation;
