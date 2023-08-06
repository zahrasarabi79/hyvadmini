import { Typography, Stack } from "@mui/material";
import { CssTextField } from "./TextFildCustom";

const ContractInfoInputs = ({ contract , HandelState }: any) => {
  console.log(contract );

  return (
    <Stack dir="rtl">
      <Typography
        variant="h5"
        color="white"
        sx={{ borderBottom: " 1px solid white", mb: 2, pb: 2 }}
      >
        اطلاعات قرارداد
      </Typography>

      <Stack direction={"row"} gap={50}>
        <CssTextField
          name="dateContract"
          value={contract.dateContract}
          onChange={HandelState}
          label="تاریخ قرارداد"
        />
        <CssTextField
          name="numContract"
          value={contract.numContract}
          onChange={HandelState}
          label="شماره قرارداد"
        />
      </Stack>
    </Stack>
  );
};

export default ContractInfoInputs;
