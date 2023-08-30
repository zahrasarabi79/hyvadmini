import { Card, CardActions, CardContent, CardHeader, Grid, Stack, Typography } from "@mui/material";
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
    {
      id: NaN,
      number: NaN,
      costTitle: "",
      presenter: "",
      reportPayment: [{ id: NaN, bank: "", payments: "", datepayment: "", contractId: NaN, reportId: NaN }],
      contractId: NaN,
    },
  ]);

  const { id } = useParams();
  const getContract = async () => {
    try {
      const { data } = await axiosInstance.post("/showReports", { id });

      console.log(data.Contracts[0].report[0].reportPayment);

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
    <Card>
      <CardHeader dir="rtl" title="اطلاعات قرارداد" sx={{ borderBottom: "3px solid rgba(255, 122, 0, 1)" }} />
      <CardContent>
        <Stack sx={{ p: 2, gap: 2, borderRadius: 4 }}>
          <Typography variant="h4" sx={{ color: "white", textAlign: "center", p: 2 }}>
            گزارش خرید و فروش هیواد پرواز کیش
          </Typography>
          <ContractInformations contract={contract} />
          <PassengersInfo passengers={passengers} />
          <ReportsInfo reports={reports} />
          <CardActions sx={{ gap: 2 }}>
            <Grid container direction={["column", "row"]} spacing={2}>
              <Grid item xs={12} md={6}>
                <EditBtn id={id} />
              </Grid>
              <Grid item xs={12} md={6}>
                <Deletebtn />
              </Grid>
            </Grid>
          </CardActions>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Contract;
