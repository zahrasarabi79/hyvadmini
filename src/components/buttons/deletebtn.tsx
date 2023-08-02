import { Button } from "@mui/material";
import axiosInstance from "../axios/axiosInstance";
import { useNavigate, useParams } from "react-router-dom";

const Deletebtn = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const deleteReport = () => {
    try {
      axiosInstance.post("/deleteReports", { id });
      navigate("/dashboardd");
    } catch {
      console.log("did not get res");
    }
  };
  return (
    <Button onClick={deleteReport} variant="contained" sx={{ bgcolor: "#f43f5e", fontSize: 20 }} fullWidth>
      حذف
    </Button>
  );
};

export default Deletebtn;
