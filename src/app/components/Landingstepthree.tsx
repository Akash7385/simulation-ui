import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";

const LaneverStepThree = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "3rem" }}
      >
        <FormControl>
          <InputLabel id="demo-simple-select-label">Essay Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Essay Type"
            onChange={handleChange}
            sx={{ width: "190px" }}
          >
            <MenuItem value={1}>Query</MenuItem>
            <MenuItem value={2}>HELL</MenuItem>
            <MenuItem value={3}>ANT</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </>
  );
};

export default LaneverStepThree;
