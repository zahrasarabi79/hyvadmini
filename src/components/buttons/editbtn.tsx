import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { RouteParams } from "../interface/Interfaces";

const EditBtn: React.FC<RouteParams> = ({ id }) => {
  const navigate = useNavigate();
  const goToEditPage = () => {
    navigate(`/EditReport/${id}`);
  };
  return (
    <Button onClick={goToEditPage} variant="contained" sx={{ bgcolor: "#3b82f6", fontSize: 20 }} fullWidth>
      ویرایش
    </Button>
  );
};

export default EditBtn;
