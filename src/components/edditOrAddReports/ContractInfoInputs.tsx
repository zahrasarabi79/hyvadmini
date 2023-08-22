import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Grid, Card, CardHeader, CardContent } from "@mui/material";
import { CssTextField } from "./TextFildCustom";
import { IContract, IContractInfoInputs } from "../interface/Interfaces";
import { AdapterDateFnsJalali } from "@mui/x-date-pickers/AdapterDateFnsJalali";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";

const ContractInfoInputs: React.FC<IContractInfoInputs> = ({
  contract,
  setContract,
  setNumContractError,
  numContractError,
  setDateContractError,
  dateContractError,
}) => {
  const handelStateDateContract = async (e: any, newDate: Date | { validationError: any }) => {
    if ("_i" in newDate) {
      const selected = newDate._i;
      console.log(selected);
    }

    setContract((prev: IContract) => ({ ...prev, dateContract: newDate }));
    setDateContractError(false);
  };
  const handelStateNumContract = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setContract((prev: IContract) => ({ ...prev, [e.target.name]: e.target.value }));
    setNumContractError(false);
  };
  const handelChangetypeReport = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setContract((prev: IContract) => ({ ...prev, [name]: value }));
  };

  return (
    <Card dir="rtl" sx={{ boxShadow: "none" }}>
      <CardHeader sx={{ borderBottom: "3px solid #fff" }} title="اطلاعات قرارداد" />
      <CardContent>
        <Grid container dir="rtl" spacing={3}>
          <Grid item xs={12}>
            <LocalizationProvider dateAdapter={AdapterDateFnsJalali}>
              <DatePicker
                helperText={dateContractError ? "شماره قرار داد را وارد کنید" : ""}
                error={dateContractError}
                value={contract.dateContract}
                onChange={handelStateDateContract}
                label="تاریخ قرارداد"
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12}>
            <CssTextField
              name="numContract"
              value={contract.numContract}
              onChange={handelStateNumContract}
              label="شماره قرارداد"
              helperText={numContractError ? "شماره قرار داد را وارد کنید" : ""}
              error={numContractError}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControl>
              <FormLabel sx={{ fontSize: 20, color: "white" }}> نوع گزارش</FormLabel>
              <RadioGroup row name="typeReport" onChange={handelChangetypeReport} value={contract.typeReport}>
                <FormControlLabel value="خرید" control={<Radio />} label="خرید" />
                <FormControlLabel value="فروش" control={<Radio />} label="فروش" />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ContractInfoInputs;
