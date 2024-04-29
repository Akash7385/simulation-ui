import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import React from "react";

const LaneverStepFourth = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "3rem",
          marginTop: "3rem",
        }}
      >
        <FormControl>
          <InputLabel id="demo-simple-select-label">Queries List</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            label="Queries List"
            onChange={handleChange}
            sx={{ width: "190px" }}
          >
            <MenuItem value={10}>Queries List</MenuItem>
            <MenuItem value={20}>HELL</MenuItem>
            <MenuItem value={30}>ANT</MenuItem>
          </Select>
        </FormControl>

        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "28ch" },
            display: "flex",
            flexDirection: "row",
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="standard-basic" label="Max Count" variant="standard" />
        </Box>
      </Box>
    </>
  );
};

export default LaneverStepFourth;
