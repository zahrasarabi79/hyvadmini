import { Card, Button, CardHeader, Stack, Typography, Paper } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import ContractInfoInputs from "./ContractInfoInputs";
import PassengersInputs from "./passengersInputs";
import BuySellInformation from "./BuySellInformation";
import axiosInstance from "../axios/axiosInstance";
import { IContract, IPassenger, IReport, IReportError, IReportErrorPayment, IReportPayment } from "../interface/Interfaces";
import { AxiosError } from "axios";

const FormContractInputs = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const [report, setReport] = useState<IReport[]>([
    {
      number: "",
      costTitle: "",
      presenter: "",
      reportPayment: [{ bank: "", payments: "", datepayment: "" }],
    },
  ]);
  const [contract, setContract] = useState<IContract>({
    dateContract: "",
    numContract: "",
    typeReport: "خرید",
    passengers: [],
    report: [],
  });

  const [dateContractError, setDateContractError] = useState(false);
  const [numContractError, setNumContractError] = useState(false);
  const [passengersError, setPassengersError] = useState(false);
  const [reportError, setReportError] = useState<IReportError[]>([
    {
      number: false,
      costTitle: false,
      presenter: false,
      reportPayment: [{ bank: false, payments: false, datepayment: false }],
    },
  ]);

  useEffect(() => {
    setContract({
      ...contract,
      report: [...report],
    });
  }, [report]);

  useEffect(() => {
    if (id) {
      getContract();
    } else {
      console.log("add data");
    }
  }, []);

  const saveContract = async () => {
    try {
      const { data } = await axiosInstance.post("/AddReports", contract);
      navigate(`/showReport/${data.id}`);
    } catch (error) {
      console.log("problem:", error);
    }
  };
  const isError = reportError.some((item) => {
    return (
      item.number || item.costTitle || item.presenter || item.reportPayment.some((payment) => payment.bank || payment.payments || payment.datepayment)
    );
  });

  const getContract = async () => {
    try {
      const { data } = await axiosInstance.post("/showReports", { id });
      const { dateContract, numContract, typeReport, passengers, report } = data.Contracts[0];
      const passengerNames = passengers.map(({ passenger }: IPassenger) => passenger);

      setContract({
        dateContract,
        numContract,
        typeReport,
        passengers: [...passengerNames],
        report: [],
      });

      const ReportData = report.map((obj: IReport) => {
        const reportPayments = obj.reportPayment.map(({ bank, payments, datepayment }: IReportPayment) => ({
          bank,
          payments,
          datepayment,
        }));
        return {
          number: obj.number,
          costTitle: obj.costTitle,
          presenter: obj.presenter,
          reportPayment: [...reportPayments],
        };
      });
      setReport([...ReportData]);
    } catch (error: AxiosError | any) {
      console.log("problem:", error);
    }
  };

  const updateDataContract = async () => {
    try {
      const { data } = await axiosInstance.post("/updateReports", { ...contract, id });
      navigate(`/showReport/${data.findContract.id}`);
    } catch (error: AxiosError | any) {
      console.log("problem");
    }
  };
  const updateContract = (updatedContract: IContract) => {
    setContract(updatedContract);
  };
  const validateReportArray = (reportArray: IReport[]) => {
    reportArray.forEach((item: IReport, index: number) => {
      setReportError((prevStates: IReportError[]) => {
        const newState: IReportError[] = [...prevStates];
        newState[index] = newState[index] || {};
        newState[index].number = item.number.toString().trim() === "" ? true : false;
        newState[index].costTitle = item.costTitle.trim() === "" ? true : false;
        newState[index].presenter = item.presenter.trim() === "" ? true : false;
        newState[index].reportPayment = item.reportPayment.map((payment: IReportPayment) => ({
          bank: payment.bank.trim() === "" ? true : false,
          payments: payment.payments.trim() === "" ? true : false,
          datepayment: payment.datepayment.trim() === "" ? true : false,
        }));
        return newState;
      });
    });
  };
  console.log(!!contract.dateContract);

  const handelCantractInfoError = async () => {
    contract.dateContract ? setDateContractError(false) : setDateContractError(true);
    contract.numContract.trim() === "" ? setNumContractError(true) : setNumContractError(false);
    contract.passengers.length === 0 ? setPassengersError(true) : setPassengersError(false);
    validateReportArray(contract.report);
  };

  const handelSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await handelCantractInfoError();
    const isFormValid: boolean = !dateContractError && !numContractError && !passengersError && !isError;

    isFormValid ? (id ? updateDataContract() : saveContract()) : console.log("didnot valid");
    console.table(`date : ${dateContractError}😊`, `numErr:${numContractError}😊`, `passErr:${passengersError}😊`, `isError:${isError}😊`);
  };

  return (
    <>
      <Card>
        <CardHeader dir="rtl" sx={{ borderBottom: "3px solid rgba(255, 122, 0, 1)" }} title=" ایجاد قرارداد" />

        <Stack sx={{ p: 2, gap: 5, borderRadius: 4, justifyContent: "right" }}>
          <Typography variant="h4" sx={{ color: "white", textAlign: "center", p: 2 }}>
            گزارش خرید و فروش هیواد پرواز کیش
          </Typography>
          <form noValidate onSubmit={handelSubmit}>
            <ContractInfoInputs
              contract={contract}
              setContract={setContract}
              setDateContractError={setDateContractError}
              dateContractError={dateContractError}
              setNumContractError={setNumContractError}
              numContractError={numContractError}
            />
            <PassengersInputs
              contract={contract}
              updateContract={updateContract}
              passengersError={passengersError}
              setPassengersError={setPassengersError}
            />
            <BuySellInformation
              updateContract={updateContract}
              report={report}
              setReport={setReport}
              reportError={reportError}
              setReportError={setReportError}
              contract={contract}
            />
            <Button type="submit" variant="contained" color="secondary">
              ثبت گزارش
            </Button>
          </form>
        </Stack>
      </Card>
    </>
  );
};

export default FormContractInputs;
