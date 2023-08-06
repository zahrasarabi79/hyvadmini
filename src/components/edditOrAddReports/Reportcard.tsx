import { Button, Stack, Typography, Box } from "@mui/material";
import Report from "./Report";
import { TiDelete } from "react-icons/ti";

const ReportCard = () => {
  return (
    <Stack sx={{ borderRadius: 4, padding: 2, gap: 2 }}>
      <Typography
        component="div"
        variant="body1"
        style={{
          height: 200,
          width: "100%",
          position: "relative",
        }}
      >
        <Box
          sx={{
            color: "red",
            position: "absolute",
            top: "-15px",
            left: "-12px",
            zIndex: "tooltip",
            fontSize: 30,
          }}
        >
          <TiDelete />
        </Box>
        <Box
          sx={{
            width: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: "mobile stepper",
            gap: 5,
          }}
        >
          <Report />
        </Box>
      </Typography>

      <Button variant="contained" color="primary" sx={{ fontSize: 20 }}>
        افزودن اطلاعات جدید
      </Button>
    </Stack>
  );
};

export default ReportCard;
