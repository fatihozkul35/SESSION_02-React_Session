import { Checkbox, FormControlLabel } from "@mui/material";
import { NetworkCheck } from "@mui/icons-material";

const CheckboxComp = () => {
  return (
    <FormControlLabel
      label="Wifi"
      control={
        <Checkbox icon={<NetworkCheck />} checkedIcon={<NetworkCheck />} />
      }
    ></FormControlLabel>
  );
};

export default CheckboxComp;
