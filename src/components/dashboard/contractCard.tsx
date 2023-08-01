import { Grid, Container, Button, Typography, Box } from "@mui/material";
import { Stack } from "@mui/system";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const ContractCard = ({ contract }: any) => {
  const navigate = useNavigate();
  const showReportPage = () => {
    localStorage.setItem("id", contract.id);
    navigate("/showReport");
  };
  return (
    <Container maxWidth={false}>
      <Grid
        sx={{
          background: "#3730a3",
          p: 2,
          borderRadius: 2,
        }}
      >
        <Grid container spacing={6} alignItems={"center"}>
          <Grid item xs={3}>
            <Link to={`/showReport/${contract.id}`}>
              <Button onClick={showReportPage} variant="contained" color="primary" fullWidth sx={{ boxShadow: "none", fontSize: 20 }}>
                مشاهده
              </Button>
            </Link>
          </Grid>
          <Grid item xs={9} sx={{ justifyContent: "center" }}>
            <Grid container justifyContent={"right"} gap={10}>
              <Stack direction={"row"} gap={1}>
                <Typography component="span" sx={{ fontSize: 20 }}>
                  {contract.dateContract}
                </Typography>
                <Typography component="span" sx={{ fontSize: 20 }}>
                  :تاریخ قراداد
                </Typography>
              </Stack>

              <Stack direction={"row"} gap={1}>
                <Box component="span" sx={{ fontSize: 20 }}>
                  {contract.numContract}
                </Box>
                <Box component="span" sx={{ fontSize: 20 }}>
                  :شماره قراداد
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContractCard;
