import { Box, Grid, Typography } from "@mui/material";
import ContractCard from "./contractCard";
import { useEffect, useState } from "react";
import axiosInstance from "../axios/axiosInstance";
import { IContractApiResponse } from "../interface/Interfaces";
import { AxiosError } from "axios";

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
        List Of Reports
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
        {listOfContracts.map((contract) => (
          <ContractCard key={contract.id} contract={contract} />
        ))}
      </Box>
    </Grid>
  );
};

export default ListOfContracts;
