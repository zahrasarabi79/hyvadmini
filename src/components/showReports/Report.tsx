import { Stack, Typography } from "@mui/material";

const Report = ({ report }: any) => {
  return (
    <Stack sx={{ px: 8, py: 2, borderRadius: 2, justifyContent: "space-between", gap: 2, border: "1px solid #3b82f6" }}>
      <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
        <Stack direction={"row"} gap={1}>
          <Typography component="span" sx={{ fontSize: 20 }}>
            {report.costTitle}
          </Typography>
          <Typography component="span" sx={{ fontSize: 20 }}>
            :نوع هزینه
          </Typography>
        </Stack>
        <Stack direction={"row"} gap={1}>
          <Typography component="span" sx={{ fontSize: 20 }}>
            {report.number}
          </Typography>
          <Typography component="span" sx={{ fontSize: 20 }}>
            :تعداد
          </Typography>
        </Stack>
        <Stack direction={"row"} gap={1}>
          <Typography component="span" sx={{ fontSize: 20 }}>
            {report.presenter}
          </Typography>
          <Typography component="span" sx={{ fontSize: 20 }}>
            :مجری
          </Typography>
        </Stack>
      </Stack>
      <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
        <Stack direction={"row"} gap={1}>
          <Typography component="span" sx={{ fontSize: 20 }}>
            {report.bank}
          </Typography>
          <Typography component="span" sx={{ fontSize: 20 }}>
            :بانک/شرکاء
          </Typography>
        </Stack>
        <Stack direction={"row"} gap={1}>
          <Typography component="span" sx={{ fontSize: 20 }}>
            {report.datepayment}
          </Typography>
          <Typography component="span" sx={{ fontSize: 20 }}>
            :تاریخ پرداخت
          </Typography>
        </Stack>
        <Stack direction={"row"} gap={1}>
          <Typography component="span" sx={{ fontSize: 20 }}>
            {report.payments}
          </Typography>
          <Typography component="span" sx={{ fontSize: 20 }}>
            :مبلغ پرداختی
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Report;
