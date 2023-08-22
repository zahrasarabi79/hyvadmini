import { Box, Card, CardContent, CardHeader, Grid, useTheme, Button, Typography, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import axiosInstance from "../axios/axiosInstance";
import { IContractApiResponse } from "../interface/Interfaces";
import { AxiosError } from "axios";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import { IContractInformations } from "../interface/Interfaces";

const ListOfContracts = () => {
  const [listOfContracts, setListOfContracts] = useState<IContractApiResponse[]>([]);
  const getListOfReports = async () => {
    try {
      const { data } = await axiosInstance.post("/listOfReports");
      setListOfContracts(data.Contracts);
    } catch (error: AxiosError | any) {
      if (error.response.status === 401) {
        console.log("401 error");
      }
      if (error.response.status === 400) {
        console.log("400 error");
      }
    }
  };
  useEffect(() => {
    getListOfReports();
  }, []);

  return (
    <Card>
      <CardHeader sx={{ borderBottom: "3px solid rgba(255, 122, 0, 1)" }} title="List Of Reports" />
      <CardContent sx={{}}>
        <Grid container direction="column" justifyContent="center" gap={2} alignItems="stretch">
          {listOfContracts.map((contract) => (
            <ContractCard key={contract.id} contract={contract} />
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

const ContractCard: React.FC<IContractInformations> = ({ contract }) => {
  const navigate = useNavigate();
  const theme = useTheme();

  const showReportPage = () => {
    navigate("/showReport");
  };
  return (
    <>
      <Grid item sx={{ borderRadius: 2, bgcolor: theme.palette.divider, p: 2 }}>
        <Grid container alignItems={"center"} direction={"row-reverse"}>
          <Grid item xs={12} md={5} alignItems={"center"}>
            <Stack direction={"row"} gap={1} justifyContent={"flex-end"}>
              <Typography component="span" sx={{ fontSize: 20 }}>
                {contract.dateContract}
              </Typography>
              <Typography component="span" sx={{ fontSize: 20 }}>
                :تاریخ قراداد
              </Typography>
            </Stack>
          </Grid>
          <Grid item xs={12} md={5} sx={{ my: [2, 4, 0], lineHeight: [1.5,0 ,0] }}>
            <Stack direction={"row"} gap={1} justifyContent={"flex-end"}>
              <Box component="span" sx={{ fontSize: 20 }}>
                {contract.numContract}
              </Box>
              <Box component="span" sx={{ fontSize: 20 }}>
                :شماره قراداد
              </Box>
            </Stack>
          </Grid>
          <Grid item xs={12} md={2}>
            <Link to={`/showReport/${contract.id}`}>
              <Button onClick={showReportPage} variant="contained" color="primary" fullWidth sx={{ boxShadow: "none", fontSize: 20 }}>
                مشاهده
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default ListOfContracts;
