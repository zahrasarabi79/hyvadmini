import { Stack } from "@mui/material";
import { CssTextField } from "./TextFildCustom";
import { Button, Card } from "@mui/material";
import { useState } from "react";

const Report = ({ index, item, handleChange }: any) => {
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
          onChange={(e) => handleChange(e, index, "number")}
        />
        <CssTextField
          label="عنوان هزینه"
          fullWidth
          value={item.costTitle}
          onChange={(e) => handleChange(e, index, "costTitle")}
        />
        <CssTextField
          label="مجری"
          fullWidth
          value={item.presenter}
          onChange={(e) => handleChange(e, index, "presenter")}
        />
      </Stack>
      <Stack direction={"row"} sx={{ gap: 3 }}>
        <CssTextField
          label="بانک"
          fullWidth
          value={item.bank}
          onChange={(e) => handleChange(e, index, "bank")}
        />
        <CssTextField
          label="هزینه ها"
          fullWidth
          value={item.payments}
          onChange={(e) => handleChange(e, index, "payments")}
        />
        <CssTextField
          label="تاریخ"
          fullWidth
          value={item.datepayment}
          onChange={(e) => handleChange(e, index, "datepayment")}
        />
      </Stack>
      <Button variant="contained" sx={{ mt: 3, justifyContent: "center", width: "100%" }}>
        delete
      </Button>
    </Card>
  );
};
export default Report;
