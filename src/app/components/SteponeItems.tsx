import React from "react";
import {
  FormControl,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

const StepOneItems = () => {
  const [radioValue, setRadioValue] = React.useState("radioFirst");

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRadioValue(event.target.value);
  };
  return (
    <FormControl sx={{ marginTop: "2rem" }}>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={radioValue}
        onChange={handleRadioChange}
      >
        <FormControlLabel
          value="radioFirst"
          control={<Radio />}
          label="Add New Config"
        />
        <FormControlLabel
          value="radioSecond"
          control={<Radio />}
          label="Add From Existing Config"
        />
        <FormControlLabel
          value="radioThird"
          control={<Radio />}
          label="Add From Existing Simulation"
        />
        <FormControlLabel
          value="radioFourth"
          control={<Radio />}
          label="Edit  Existing Config"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default StepOneItems;
