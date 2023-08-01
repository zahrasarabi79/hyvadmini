import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import ContractInformations from "./ContractInformations";
import PassengersInfo from "./PassengersInfo";
import ReportsInfo from "./ReportInfo";
import axiosInstance from "../axios/axiosInstance";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Contract = () => {
  const [contract, setContract] = useState();
  // const [passengers, setPassengers] = useState();

  const { id } = useParams();
  const getContract = async () => {
    try {
      const { data } = await axiosInstance.post("/showReports", { id });
      setContract(data.Contracts[0]);
      // setPassengers(data.Contracts[0].passengers.passenger);
      // console.log(data.Contracts[0].passengers);
    } catch (error: any) {
      console.log("problem");
    }
  };

  useEffect(() => {
    getContract();
  }, []);

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
          p: 2,
          borderBottomLeftRadius: 6,
          borderBottomRightRadius: 6,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Stack sx={{ p: 2, gap: 2, borderRadius: 4 }}>
          <Typography variant="h4" sx={{ color: "white", textAlign: "center", p: 2 }}>
            گزارش خرید و فروش هیواد پرواز کیش
          </Typography>
          <ContractInformations contract={contract} />
          <PassengersInfo />
          <ReportsInfo />
          <Stack direction={"row"} gap={4} pt={4}>
            <Button variant="contained" sx={{ bgcolor: "#3b82f6", fontSize: 20 }} fullWidth>
              ویرایش
            </Button>
            <Button variant="contained" sx={{ bgcolor: "#f43f5e", fontSize: 20 }} fullWidth>
              حذف
            </Button>
          </Stack>
        </Stack>
      </Box>
    </Grid>
  );
};

export default Contract;
