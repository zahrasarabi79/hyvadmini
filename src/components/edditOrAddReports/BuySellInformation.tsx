import { Stack } from "@mui/joy";
import { Button, Typography } from "@mui/material";
import TextFildCustom from "./TextFildCustom";
import { AiOutlinePlus } from "react-icons/ai";
import ReportCard from "./Reportcard";

const BuySellInformation = ({contract}:any) => {
  return (
    <Stack dir="rtl" gap={1}>
      <Typography
        variant="h5"
        color="white"
        sx={{ borderBottom: " 1px solid white", mb: 2, pb: 2 }}
      >
        اطلاعات خرید/فروش
      </Typography>
      <ReportCard />
      
    </Stack>
  );
};

export default BuySellInformation;
