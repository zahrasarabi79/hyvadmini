import { Card, CardActions, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import AddReportBtn from "../buttons/addReportBtn";
import ListPageBtn from "../buttons/goToList";

const WelcomeCard = () => {
  return (
    <Card sx={{ justifyContent: "center" }}>
      <CardHeader sx={{ borderBottom: "3px solid rgba(255, 122, 0, 1)" }} dir="rtl" title="خوش آمدید" />
      <CardContent>
        <Typography sx={{ fontSize: 20, textAlign: "center", color: "white" }} variant="body1">
          !!!! به هیواد پرواز کیش خوش آمدید
        </Typography>
      </CardContent>
      <CardActions>
        <Grid container spacing={2} mx={2} justifyContent={"center"}>
          <Grid item xs={6} lg={12} md={6}>
            <AddReportBtn />
          </Grid>
          <Grid item xs={6} lg={12} md={6}>
            <ListPageBtn />
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default WelcomeCard;
