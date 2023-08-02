import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddReportBtn = () => {
  const navigate = useNavigate();

  const addReportPage = () => {
    navigate("/addOrEditReport");
  };

  return (
    <Button
      variant="contained"
      sx={{
        padding: 2,
        margin: 2,
        bgcolor: "#FF7A00",
        boxShadow: "none",
        fontSize: 20,
      }}
      onClick={addReportPage}
    >
      add Report
    </Button>
  );
};

export default AddReportBtn;
