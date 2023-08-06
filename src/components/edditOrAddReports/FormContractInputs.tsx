import { Box, Grid, Stack, Typography } from "@mui/material";
import ContractInfoInputs from "./ContractInfoInputs";
import PassengersInputs from "./passengersInputs";
import BuySellInformation from "./BuySellInformation";
import axiosInstance from "../axios/axiosInstance";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
const FormContractInputs = ({ id }: any) => {
  const [contract, setContract] = useState({
    dateContract: "",
    numContract: "",
    typeReport: "",
    passengers: [],
    report: [],
  });
  const getContract = async () => {
    try {
      const { data } = await axiosInstance.post("/showReports", { id });
      setContract(data.Contracts[0]);
    } catch (error: any) {
      console.log("did not get res");
    }
  };
  const updateContract = (updatedContract: any) => {
    setContract(updatedContract);
  };
  useEffect(() => {
    getContract();
  }, []);

  const HandelState = (e: any) => {
    setContract((prevstate) => ({
      ...prevstate,
      [e.target.name]: e.target.value,
    }));
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    console.log(contract);
  };

  return (
    <Grid item xs={9}>
      <Typography
        variant="body1"
        sx={{
          p: 2,
          fontSize: 20,
          color: "white",
          background: "#3b82f6",
          borderTopLeftRadius: 6,
          borderTopRightRadius: 6,
        }}
      >
        Contract Information
      </Typography>

      <Box
        sx={{
          bgcolor: "#312e81",
          py: 2,
          borderBottomLeftRadius: 6,
          borderBottomRightRadius: 6,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Stack sx={{ p: 2, gap: 5, borderRadius: 4, justifyContent: "right" }}>
          <Typography variant="h4" sx={{ color: "white", textAlign: "center", p: 2 }}>
            گزارش خرید و فروش هیواد پرواز کیش
          </Typography>
          <form onSubmit={handelSubmit}>
            <ContractInfoInputs HandelState={HandelState} contract={contract} />
            <PassengersInputs
              HandelState={HandelState}
              contract={contract}
              updateContract={updateContract}
            />
            <BuySellInformation HandelState={HandelState} contract={contract} />
            <Button type="submit" variant="contained" color="secondary">
              ثبت گزارش
            </Button>
          </form>
        </Stack>
      </Box>
    </Grid>
  );
};

export default FormContractInputs;
