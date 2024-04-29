"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import SimulationConfig from "../simulationconfig/page";
import { colors } from "@mui/material";

const LandingPage = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
    <Box
      sx={{
        display: { xs: "flex", sm: "flex" },
        flexDirection: { xs: "column", sm: "row" },
        alignItems: { xs: "center", sm: "center" },
        justifyContent: { xs: "center", sm: "center" },
        height: "89vh",
        gap: "60px",
      }}
    >
      <FormControl>
        <InputLabel id="demo-simple-select-label">IPL</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="IPL"
          onChange={handleChange}
          sx={{ width: "150px" }}
        >
          <MenuItem value={10}>IPL</MenuItem>
          <MenuItem value={20}>HELL</MenuItem>
          <MenuItem value={30}>ANT</MenuItem>
        </Select>
      </FormControl>

      <FormGroup>
        <FormControlLabel
          control={<Switch defaultChecked />}
          label="Development Mode"
        />
      </FormGroup>

      <Stack spacing={2} direction="row">
        <Button
          sx={{
            backgroundColor: "#074A36",
            color: "white",
            paddingX: 3,
            "&:hover": {
              backgroundColor: "#074A36",
            },
          }}
        >
          INITIALIZE
        </Button>
      </Stack>
    </Box>
  );
};

export default LandingPage;
