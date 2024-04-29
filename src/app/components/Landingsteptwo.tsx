import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

const LaneverStepTwo = () => {
  const [steps, setSteps] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setSteps(event.target.value as string);
  };
  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}
      >
        <FormControl>
          <InputLabel id="demo-simple-select-label">Category Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={steps}
            label="Category Type"
            onChange={handleChange}
            sx={{ width: "190px" }}
          >
            <MenuItem value={1}>Essay</MenuItem>
            <MenuItem value={2}>HELL</MenuItem>
            <MenuItem value={3}>ANT</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default LaneverStepTwo;
