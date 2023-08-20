import { Typography, Stack, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { CssTextField } from "./TextFildCustom";
import { IContract, IContractInfoInputs } from "../interface/Interfaces";

const ContractInfoInputs: React.FC<IContractInfoInputs> = ({
  contract,
  setContract,
  setNumContractError,
  numContractError,
  setDateContractError,
  dateContractError,
}) => {
  const handelStateDateContract = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setContract((prev: IContract) => ({ ...prev, [e.target.name]: e.target.value }));
    setDateContractError(false);
  };
  const handelStateNumContract = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setContract((prev: IContract) => ({ ...prev, [e.target.name]: e.target.value }));
    setNumContractError(false);
  };

  return (
    <Stack dir="rtl">
      <Typography variant="h5" color="white" sx={{ borderBottom: " 1px solid white", mb: 2, pb: 2 }}>
        اطلاعات قرارداد
      </Typography>

      <Stack direction={"row"} gap={50}>
        <CssTextField
          name="dateContract"
          value={contract.dateContract}
          onChange={handelStateDateContract}
          label="تاریخ قرارداد"
          helperText={dateContractError ? "شماره قرار داد را وارد کنید" : ""}
          error={dateContractError}
        />
        <CssTextField
          name="numContract"
          value={contract.numContract}
          onChange={handelStateNumContract}
          label="شماره قرارداد"
          helperText={numContractError ? "شماره قرار داد را وارد کنید" : ""}
          error={numContractError}
        />
      </Stack>

      <FormControl sx={{ my: 5 }}>
        <FormLabel
          sx={{
            fontSize: 20,
            color: "white",
          }}
        >
          نوع گزارش
        </FormLabel>
        <RadioGroup row name="typeReport" value={contract.typeReport}>
          <FormControlLabel
            value="خرید"
            onChange={(e: any) => setContract((prev: any) => ({ ...prev, [e.target.name]: e.target.value }))}
            control={
              <Radio
                sx={{
                  color: "#3b82f6",
                  "&.Mui-checked": {
                    color: "#3b82f6",
                  },
                }}
              />
            }
            label="خرید"
          />
          <FormControlLabel
            value="فروش"
            onChange={(e: any) => setContract((prev: any) => ({ ...prev, [e.target.name]: e.target.value }))}
            control={
              <Radio
                sx={{
                  color: "#3b82f6",
                  "&.Mui-checked": {
                    color: "#3b82f6",
                  },
                }}
              />
            }
            label="فروش"
          />
        </RadioGroup>
      </FormControl>
    </Stack>
  );
};

export default ContractInfoInputs;
