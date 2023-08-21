import { Chip } from "@mui/material";
import { IPassengerCard } from "../interface/Interfaces";

const PassengerCard: React.FC<IPassengerCard> = ({ passengername, onDelete }) => {
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
