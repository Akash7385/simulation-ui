import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function StepFifthItems() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
        display: "flex",
        flexWrap: "wrap",
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="standard-basic"
        label="RELATED CONTENT COUNT"
        variant="standard"
        defaultValue="10"
      />{" "}
      <TextField
        id="standard-basic"
        label="EXTRA RELATED COUNT"
        variant="standard"
        defaultValue="10"
      />{" "}
      <TextField
        id="standard-basic"
        label="MAX RELATED CONTENT"
        variant="standard"
        defaultValue="15"
      />
      <TextField
        id="standard-basic"
        label="SPAN REPLACEMENT"
        variant="standard"
        defaultValue="30"
      />{" "}
      <TextField
        id="standard-basic"
        label="R SCORE CUTOFF"
        variant="standard"
        defaultValue="0.5"
      />{" "}
      <TextField
        id="standard-basic"
        label="MAX REPLACEMENT RATE"
        variant="standard"
        defaultValue="0.4"
      />{" "}
      <TextField
        id="standard-basic"
        label="ALLOW TOPIC RATE"
        variant="standard"
        defaultValue="3"
      />
    </Box>
  );
}
export default StepFifthItems;
