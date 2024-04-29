import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

function SelectSecondRadio() {
  const [radio, setRadio] = React.useState("1");

  const handleChange = (event: SelectChangeEvent) => {
    setRadio(event.target.value as string);
  };

  return (
    <Box sx={{ display: "flex", justifyContent: "center", marginTop: "2rem" }}>
      <FormControl>
        <InputLabel id="demo-simple-select-label">Version</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={radio}
          label="Version"
          defaultValue="1"
          onChange={handleChange}
          sx={{ width: "150px" }}
        >
          <MenuItem value={"1"}>1</MenuItem>
          <MenuItem value={2}>2</MenuItem>
          <MenuItem value={3}>3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
export default SelectSecondRadio;
