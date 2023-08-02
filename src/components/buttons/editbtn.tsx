import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const EditBtn = () => {
  const navigate = useNavigate();
  const goToEditPage = () => {
    navigate("/addOrEditReport");
  };
  return (
    <Button onClick={goToEditPage} variant="contained" sx={{ bgcolor: "#3b82f6", fontSize: 20 }} fullWidth>
      ویرایش
    </Button>
  );
};

export default EditBtn;
