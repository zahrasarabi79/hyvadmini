import { Card, CardContent, CardHeader, Grid, Typography } from "@mui/material";
import { IPassengersInfo } from "../interface/Interfaces";

const PassengersInfo: React.FC<IPassengersInfo> = ({ passengers }) => {
  return (
    <Card dir="rtl" sx={{ boxShadow: "none" }}>
      <CardHeader title="اسامی طرف قرارداد" sx={{ borderBottom: "3px solid #3b82f6" }} />
      <CardContent>
        <Grid container sx={{ border: "1px solid #3b82f6", borderRadius: 2, p: 2 }}>
          {passengers?.map((passengerObj) => (
            <Grid item xs={12}>
              <Typography component="span" sx={{ fontSize: 20 }} key={passengerObj.id}>
                {passengerObj.passenger} ,
              </Typography>
            </Grid>
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
};

export default PassengersInfo;
