import { Rowing } from "@mui/icons-material";
import { Grid, Stack, Typography, Button } from "@mui/material";

const ReportsInfo = () => {
  return (
    <Stack sx={{ justifyContent: "center", px: 2, py: 4, borderRadius: 2, gap: 1 }}>
      <Typography variant="h5" sx={{ color: "white", textAlign: "right", pb: 2, borderBottom: "1px solid #3b82f6", mb: 5 }}>
        گزارش خرید /فروش
      </Typography>
      <Stack sx={{ px: 8, py: 2, borderRadius: 2, justifyContent: "space-between", gap: 2, border: "1px solid #3b82f6" }}>
        <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
          <Stack direction={"row"} gap={1}>
            <Typography component="span" sx={{ fontSize: 20 }}>
              بلیط
            </Typography>
            <Typography component="span" sx={{ fontSize: 20 }}>
              :نوع هزینه
            </Typography>
          </Stack>
          <Stack direction={"row"} gap={1}>
            <Typography component="span" sx={{ fontSize: 20 }}>
              12
            </Typography>
            <Typography component="span" sx={{ fontSize: 20 }}>
              :تعداد
            </Typography>
          </Stack>
          <Stack direction={"row"} gap={1}>
            <Typography component="span" sx={{ fontSize: 20 }}>
              هیوااددد
            </Typography>
            <Typography component="span" sx={{ fontSize: 20 }}>
              :مجری
            </Typography>
          </Stack>
        </Stack>
        <Stack direction={"row"} sx={{ justifyContent: "space-between" }}>
          <Stack direction={"row"} gap={1}>
            <Typography component="span" sx={{ fontSize: 20 }}>
              1502.03.02
            </Typography>
            <Typography component="span" sx={{ fontSize: 20 }}>
              :بانک/شرکاء
            </Typography>
          </Stack>
          <Stack direction={"row"} gap={1}>
            <Typography component="span" sx={{ fontSize: 20 }}>
              1402.03.02
            </Typography>
            <Typography component="span" sx={{ fontSize: 20 }}>
              :تاریخ پرداخت
            </Typography>
          </Stack>
          <Stack direction={"row"} gap={1}>
            <Typography component="span" sx={{ fontSize: 20 }}>
              12.000.000
            </Typography>
            <Typography component="span" sx={{ fontSize: 20 }}>
              :مبلغ پرداختی
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ReportsInfo;
