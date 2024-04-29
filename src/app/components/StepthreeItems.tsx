import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function StepThreeItems() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        label="  FOR CONVERSION "
        variant="standard"
        defaultValue="1"
      />{" "}
      <TextField
        id="standard-basic"
        label="FOR TRAFFIC BASIC"
        variant="standard"
        defaultValue="1"
      />{" "}
      <TextField
        id="standard-basic"
        label=" FOR TRAFFIC RATIO "
        variant="standard"
        defaultValue="1"
      />
      <TextField
        id="standard-basic"
        label="FOR PRIMARY"
        variant="standard"
        defaultValue="5"
      />{" "}
    </Box>
  );
}
export default StepThreeItems;
