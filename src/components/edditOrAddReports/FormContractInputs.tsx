import { CardHeader, Grid, Stack, Typography } from "@mui/material";
import ContractInfoInputs from "./ContractInfoInputs";
import PassengersInputs from "./passengersInputs";
import BuySellInformation from "./BuySellInformation";
import { useState, useEffect } from "react";
import { Button } from "@mui/material";
import { Card } from "@mui/material";
import axiosInstance from "../axios/axiosInstance";
import { useNavigate, useParams } from "react-router-dom";
const FormContractInputs = () => {
  const navigate = useNavigate();
  const { id } = useParams();

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
  const [contract, setContract] = useState({
    dateContract: "",
    numContract: "",
    typeReport: "خرید",
    passengers: [],
    report: [],
  });
  const [dateContractError, setDateContractError] = useState(false);
  const [numContractError, setNumContractError] = useState(false);

  useEffect(() => {
    setContract({
      ...contract,
      report: [...report],
    });
  }, [report]);
  // const [updateData, setUpdateData] = useState();
  useEffect(() => {
    if (id) {
      getContract();
    } else {
      console.log("add data");
    }
  }, []);

  const saveContract = async () => {
    try {
      console.log(contract);
      const { data } = await axiosInstance.post("/AddReports", contract);
      console.log(data.id);
      navigate(`/showReport/${data.id}`);
    } catch (error: any) {
      console.log("problem");
    }
  };
  const getContract = async () => {
    try {
      const { data } = await axiosInstance.post("/showReports", { id });
      const { dateContract, numContract, typeReport, passengers, report } = data.Contracts[0];
      const passengerNames = passengers.map(({ passenger }: any) => passenger);
      const ReportData = report.map((obj: any) => ({
        number: obj.number,
        costTitle: obj.costTitle,
        presenter: obj.presenter,
        bank: obj.bank,
        payments: obj.payments,
        datepayment: obj.datepayment,
      }));

      setContract({
        dateContract,
        numContract,
        typeReport,
        passengers: [...passengerNames],
      });
      setReport([...ReportData]);
    } catch (error: any) {
      console.log("problem");
    }
  };
  const updateDataContract = async () => {
    try {
      console.log(contract);

      const { data } = await axiosInstance.post("/updateReports", { ...contract, id, report });
      navigate(`/showReport/${data.findContract.id}`);
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

  const handelCantractInfoError = async () => {
    contract.dateContract.trim() === "" ? setDateContractError(true) : setDateContractError(false);
    contract.numContract.trim() === "" ? setNumContractError(true) : setNumContractError(false);
  };

  const handelSubmit = async (e: any) => {
    e.preventDefault();
    await handelCantractInfoError();
    id ? updateDataContract() : saveContract();
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
            <ContractInfoInputs
              HandelState={HandelState}
              contract={contract}
              dateContractError={dateContractError}
              numContractError={numContractError}
            />
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
