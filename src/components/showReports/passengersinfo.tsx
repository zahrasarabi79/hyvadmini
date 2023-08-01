import { Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
const PassengersInfo = ({ contract }: any) => {
  return (
    <Stack direction={"row"} sx={{ justifyContent: "right", px: 10, py: 4, borderRadius: 2, gap: 1, border: "1px solid #3b82f6" }}>
      {/* {contract.map((Passenger: any) => (
        <Typography component="span" sx={{ fontSize: 20 }}>
         
        </Typography>
      ))} */}

      <Typography component="span" sx={{ fontSize: 20 }}>
        :مسافران
      </Typography>
    </Stack>
  );
};

export default PassengersInfo;
