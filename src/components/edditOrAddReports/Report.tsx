import { Stack } from "@mui/material";
import { CssTextField } from "./TextFildCustom";
import { Button, Card } from "@mui/material";
import { IReport, IReportcomponent } from "../interface/Interfaces";

const Report: React.FC<IReportcomponent> = ({ index, item, handleChange, setReport, reportError }) => {
  const onDelete = () => {
    setReport((prev: IReport[]) => [...prev.filter((item: IReport, i: number) => i !== index && item["number"] !== "")]);
  };
  return (
    <Card
      sx={{
        border: "1px solid white",
        padding: 3,
        borderRadius: 2,
        bgcolor: "#312e81",
        zIndex: "modal",
        gap: 2,
      }}
    >
      <Stack direction={"row"} sx={{ gap: 3, mb: 2 }}>
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
        <CssTextField
          label="عنوان هزینه"
          fullWidth
          value={item.costTitle}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, index, "costTitle")}
          error={reportError?.costTitle}
          helperText={reportError?.costTitle ? "تعداد را وارد کنید" : ""}
          required
        />
        <CssTextField
          label="مجری"
          fullWidth
          value={item.presenter}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, index, "presenter")}
          error={reportError?.presenter}
          helperText={reportError?.presenter ? "تعداد را وارد کنید" : ""}
          required
        />
      </Stack>
      <Stack direction={"row"} sx={{ gap: 3 }}>
        <CssTextField
          label="بانک"
          fullWidth
          value={item.bank}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, index, "bank")}
          error={reportError?.bank}
          helperText={reportError?.bank ? "تعداد را وارد کنید" : ""}
          required
        />
        <CssTextField
          label="هزینه ها"
          fullWidth
          value={item.payments}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, index, "payments")}
          error={reportError?.payments}
          helperText={reportError?.payments ? "تعداد را وارد کنید" : ""}
          required
        />
        <CssTextField
          label="تاریخ"
          fullWidth
          value={item.datepayment}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChange(e, index, "datepayment")}
          error={reportError?.datepayment}
          helperText={reportError?.datepayment ? "تعداد را وارد کنید" : ""}
          required
        />
      </Stack>
      <Button onClick={onDelete} variant="contained" sx={{ mt: 3, justifyContent: "center", width: "100%" }}>
        delete
      </Button>
    </Card>
  );
};
export default Report;
