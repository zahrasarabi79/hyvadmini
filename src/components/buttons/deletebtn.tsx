import { Alert, Stack, Snackbar, Button, Modal, Typography, Card, CardContent, CardActions } from "@mui/material";
import axiosInstance from "../axios/axiosInstance";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { RouteParams } from "../interface/Interfaces";

const Deletebtn = () => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#3730a3",
    color: "white",
    boxShadow: 24,
    p: 4,
    borderRadius: 4,
  };
  // Modal state and open/colse func
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen: () => void = () => setOpen(true);
  const handleClose: () => void = () => setOpen(false);
  // success delete snackbar state and open/colse func
  const [openSnackBar, setOpenSnackBar] = useState<boolean>(false);
  const handleOpenSnackBar: () => void = () => setOpenSnackBar(true);
  const handleCloseSnackBar: () => void = () => {
    setOpenSnackBar(false);
    navigate("/dashboardd");
  };
  // success delete snackbar state and open/colse func
  const [openFailedSnackBar, setOpenFailedSnackBar] = useState(false);
  const handleOpenFailedSnackBar: () => void = () => setOpenFailedSnackBar(true);
  const handleCloseFailedSnackBar: () => void = () => {
    setOpenFailedSnackBar(false);
  };
  //  nevigate
  const { id } = useParams();
  const navigate = useNavigate();

  const deleteReport: () => Promise<void> = async () => {
    try {
      await axiosInstance.post("/deleteReports", { id });
      handleOpenSnackBar();
    } catch {
      handleOpenFailedSnackBar();
      handleClose();
      console.log("did not get res");
    }
  };

  return (
    <Stack sx={{ width: "100%" }}>
      <Button onClick={handleOpen} variant="contained" sx={{ bgcolor: "#f43f5e", fontSize: 20 }}>
        حذف
      </Button>
      <Modal open={open} onClose={handleClose}>
        <Card sx={style}>
          <CardContent dir={"rtl"}>
            <Typography sx={{ fontSize: 20, color: "white" }} variant="body1" color="initial">
              آیا می خواهید این قرارداد را حذف کنید؟
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: "center" }}>
            <Button
              sx={{ ml: 5, borderRadius: 2, boxShadow: "none", bgcolor: "#3b82f6", fontSize: 16 }}
              onClick={handleClose}
              variant="contained"
              color="primary"
            >
              خیر
            </Button>
            <Button sx={{ borderRadius: 2, boxShadow: "none", bgcolor: "red", fontSize: 16 }} onClick={deleteReport} variant="contained">
              بله
            </Button>
          </CardActions>
        </Card>
      </Modal>
      {/* success snackBar*/}
      <Snackbar anchorOrigin={{ vertical: "top", horizontal: "center" }} open={openSnackBar} autoHideDuration={1000} onClose={handleCloseSnackBar}>
        <Alert dir="rtl" severity="success" sx={{ width: "100%", fontSize: 20, color: "green", p: 2 }}>
          قرارداد با موفقیت حذف شد!!!
        </Alert>
      </Snackbar>
      {/* failed snackBar*/}
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openFailedSnackBar}
        autoHideDuration={1000}
        onClose={handleCloseFailedSnackBar}
      >
        <Alert dir="rtl" severity="error" sx={{ width: "100%", fontSize: 20, color: "red", p: 2 }}>
          قرارداد با موفقیت حذف نشد!!!
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default Deletebtn;
