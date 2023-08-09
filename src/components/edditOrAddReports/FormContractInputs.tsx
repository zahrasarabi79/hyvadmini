import { CardHeader, Grid, Stack, Typography } from "@mui/material";
import ContractInfoInputs from "./ContractInfoInputs";
import PassengersInputs from "./passengersInputs";
import BuySellInformation from "./BuySellInformation";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { Card } from "@mui/material";
import axiosInstance from "../axios/axiosInstance";
const FormContractInputs = () => {
  const [contract, setContract] = useState({
    dateContract: "",
    numContract: "",
    typeReport: "",
    passengers: [],
    report: [],
  });

  const [report, setReport] = useState([
    {
      number: "",
      costTitle: "",
      presenter: "",
      bank: "",
      payments: "",
      datepayment: "",
    },
  ]);

  const saveContract = async () => {
    console.log(contract);

    try {
      const { data } = await axiosInstance.post("/AddReports", contract);
      console.log(data);
    } catch (error: any) {
      console.log("problem");
    }
  };

  const updateContract = (updatedContract: any) => {
    setContract(updatedContract);
  };
  const HandelState = (e: any) => {
    setContract((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };
  const handelSubmit = (e: any) => {
    e.preventDefault();
    saveContract();
  };

  return (
    <Grid item xs={9}>
      <Card
        sx={{
          bgcolor: "#312e81",
          pb: 2,
          borderBottomLeftRadius: 6,
          borderBottomRightRadius: 6,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <CardHeader
          sx={{
            color: "white",
            background: "#3b82f6",
            borderTopLeftRadius: 6,
            borderTopRightRadius: 6,
          }}
          title={
            <Typography
              variant="body1"
              sx={{
                fontSize: 20,
              }}
            >
              Contract Information
            </Typography>
          }
        />

        <Stack sx={{ p: 2, gap: 5, borderRadius: 4, justifyContent: "right" }}>
          <Typography variant="h4" sx={{ color: "white", textAlign: "center", p: 2 }}>
            گزارش خرید و فروش هیواد پرواز کیش
          </Typography>
          <form onSubmit={handelSubmit}>
            <ContractInfoInputs HandelState={HandelState} contract={contract} />
            <PassengersInputs contract={contract} updateContract={updateContract} />
            <BuySellInformation
              updateContract={updateContract}
              report={report}
              setReport={setReport}
              contract={contract}
            />
            <Button type="submit" variant="contained" color="secondary">
              ثبت گزارش
            </Button>
          </form>
        </Stack>
      </Card>
    </Grid>
  );
};

export default FormContractInputs;
