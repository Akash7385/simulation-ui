import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function StepFourthItems() {
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
        label="NUM TOP DCS RESULTS"
        variant="standard"
        defaultValue="80"
      />{" "}
      <TextField
        id="standard-basic"
        label="DCS SCORE"
        variant="standard"
        defaultValue="1.2"
      />{" "}
      <TextField
        id="standard-basic"
        label="CONVERSION SCORE"
        variant="standard"
        defaultValue="2"
      />
      <TextField
        id="standard-basic"
        label="PREDICTED PRIMARY REGION SCORE"
        variant="standard"
        defaultValue="1.5"
      />{" "}
    </Box>
  );
}
export default StepFourthItems;
