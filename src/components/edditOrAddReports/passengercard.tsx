import { Chip } from "@mui/material";
import { Box } from "@mui/system";
import { TiDelete } from "react-icons/ti";
const PassengerCard = ({ passengername, onDelete }: any) => {
  return (
    <>
      {passengername !== "" && (
        <Chip
          sx={{
            fontSize: 16,
            gap: 2,
            mb: 3,
            "& .MuiChip-deleteIcon": {
              color: "red",
              "&:hover": {
                color: "red",
              },
            },
          }}
          label={passengername}
          onDelete={onDelete}
          variant="outlined"
        />
      )}
    </>
  );
};

export default PassengerCard;
