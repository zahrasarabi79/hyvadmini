import { Button, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddReportBtn = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  const addReportPage = () => {
    navigate(`/AddContract`);
  };

  return (
    <Button
      fullWidth
      variant="contained"
      sx={{
        padding: 2,
        margin: 2,
        bgcolor: theme.palette.divider,
        boxShadow: "none",
        fontSize: 20,
      }}
      onClick={addReportPage}
    >
      گزارش جدید
    </Button>
  );
};

export default AddReportBtn;
