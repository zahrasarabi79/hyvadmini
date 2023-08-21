import { Grid, Container, Button, Typography, Box, Stack } from "@mui/material";
import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {  IContractInformations } from "../interface/Interfaces";
const ContractCard:React.FC<IContractInformations> = ({ contract }) => {
  const navigate = useNavigate();
  const showReportPage = () => {
    navigate("/showReport");
  };
  return (
    <Container maxWidth={false}>
      <Grid
        sx={{
          background: "#3730a3",
          p: 2,
          borderRadius: 2,
        }}
      >
        <Grid container spacing={6} alignItems={"center"}>
          <Grid item xs={3}>
            <Link to={`/showReport/${contract.id}`}>
              <Button onClick={showReportPage} variant="contained" color="primary" fullWidth sx={{ boxShadow: "none", fontSize: 20 }}>
                مشاهده
              </Button>
            </Link>
          </Grid>
          <Grid item xs={9} sx={{ justifyContent: "center" }}>
            <Grid container justifyContent={"left"} gap={10}>
              <Stack direction={"row"} gap={1}>
                <Typography component="span" sx={{ fontSize: 20 }}>
                  {contract.dateContract}
                </Typography>
                <Typography component="span" sx={{ fontSize: 20 }}>
                  :تاریخ قراداد
                </Typography>
              </Stack>

              <Stack direction={"row"} gap={1}>
                <Box component="span" sx={{ fontSize: 20 }}>
                  {contract.numContract}
                </Box>
                <Box component="span" sx={{ fontSize: 20 }}>
                  :شماره قراداد
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContractCard;
