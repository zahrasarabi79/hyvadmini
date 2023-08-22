import { Button, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ListPageBtn = () => {
  const navigate = useNavigate();
  const theme = useTheme();
  const addReportPage = () => {
    navigate("/dashboardd");
  };

  return (
    <Button
      variant="contained"
      fullWidth
      sx={{
        padding: 2,
        margin: 2,
        bgcolor: theme.palette.divider,
        boxShadow: "none",
        fontSize: 20,
      }}
      onClick={addReportPage}
    >
      لیست گزارش ها
    </Button>
  );
};

export default ListPageBtn;
