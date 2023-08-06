import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const EditBtn = ({ id }: any) => {
  const navigate = useNavigate();
  const goToEditPage = () => {
    navigate(`/EditReport/${id}`);
  };
  return (
    <Button
      onClick={goToEditPage}
      variant="contained"
      sx={{ bgcolor: "#3b82f6", fontSize: 20 }}
      fullWidth
    >
      ویرایش
    </Button>
  );
};

export default EditBtn;
