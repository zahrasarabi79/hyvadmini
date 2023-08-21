import { Box, Grid, Stack, Typography } from "@mui/material";
import ContractInformations from "./ContractInformations";
import PassengersInfo from "./PassengersInfo";
import ReportsInfo from "./ReportInfo";
import axiosInstance from "../axios/axiosInstance";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Deletebtn from "../buttons/deletebtn";
import EditBtn from "../buttons/editbtn";
import { IContractApiResponse, IReportApiResponse, IpassengersApiResponse } from "../interface/Interfaces";
import { AxiosError } from "axios";

const Contract = () => {
  const [contract, setContract] = useState<IContractApiResponse>({
    id: NaN,
    typeReport: "",
    dateContract: "",
    numContract: "",
    passengers: [],
    report: [],
  });
  const [passengers, setPassengers] = useState<IpassengersApiResponse[]>([{ id: NaN, passenger: "", contractId: NaN }]);
  const [reports, setReports] = useState<IReportApiResponse[]>([
    { id: NaN, number: NaN, costTitle: "", presenter: "", datepayment: "", payments: "", bank: "", contractId: NaN },
  ]);

  const { id } = useParams();
  const getContract = async () => {
    try {
      const { data } = await axiosInstance.post("/showReports", { id });
      console.log(data.Contracts[0].passengers);

      setContract(data.Contracts[0]);
      setPassengers(data.Contracts[0].passengers);
      setReports(data.Contracts[0].report);
    } catch (error: AxiosError | any) {
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
          <PassengersInfo passengers={passengers} />

          <ReportsInfo reports={reports} />

          <Stack direction={"row"} gap={4} pt={4}>
            <EditBtn id={id} />
            <Deletebtn />
          </Stack>
        </Stack>
      </Box>
    </Grid>
  );
};

export default Contract;
