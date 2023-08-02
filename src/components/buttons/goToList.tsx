import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ListPageBtn = () => {
  const navigate = useNavigate();

  const addReportPage = () => {
    navigate("/dashboardd");
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
      List of Report
    </Button>
  );
};

export default ListPageBtn;
