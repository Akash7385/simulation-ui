import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import AnotherComponent from "./Anothercomponent";
function SelectThirdRadio() {
  const [radio, setRadio] = useState("");

  const handleThirdRadio = (event: SelectChangeEvent) => {
    setRadio(event.target.value as string);
  };

  return (
    <>
      <Box
        sx={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}
      >
        <FormControl>
          <InputLabel id="demo-simple-select-label">Version</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={radio}
            label="Version"
            onChange={handleThirdRadio}
            sx={{ width: "150px" }}
          >
            <MenuItem value={"1"}>1</MenuItem>
            <MenuItem value={2}>2</MenuItem>
            <MenuItem value={3}>3</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box> {radio === "1" && <AnotherComponent />} </Box>
    </>
  );
}
export default SelectThirdRadio;
