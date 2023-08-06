import  { CssTextField } from "./TextFildCustom";
import { Stack } from "@mui/material";

const Report = () => {
  return (
    <Stack
      sx={{
        gap: 2,
        border: "1px solid white",
        padding: 3,
        borderRadius: 2,
        zIndex: "modal",
      }}
    >
      <Stack direction={"row"} sx={{ gap: 3 }}>
        <CssTextField  label="تعداد" />
        <CssTextField label="عنوان هزینه" />
        <CssTextField label="مجری" />
      </Stack>
      <Stack direction={"row"} sx={{ gap: 3 }}>
        <CssTextField label="بانک /شرکاء" />
        <CssTextField label="مبلغ پرداختی" />
        <CssTextField label="تاریخ پرداخت" />
      </Stack>
    </Stack>
  );
};

export default Report;
