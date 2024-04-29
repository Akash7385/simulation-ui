import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

function StepTwoItems() {
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
        label="CONVERSION SCORE"
        variant="standard"
        defaultValue="3.5"
      />{" "}
      <TextField
        id="standard-basic"
        label="PREDICTED TRAFFIC SCORE"
        variant="standard"
        defaultValue="0"
      />{" "}
      <TextField
        id="standard-basic"
        label="TRAFFIC RATIO "
        variant="standard"
        defaultValue="1.5"
      />
      <TextField
        id="standard-basic"
        label="TRAFFIC LOG VALUE"
        variant="standard"
        defaultValue="105"
      />{" "}
      <TextField
        id="standard-basic"
        label="ACTUAL TRAFFIC PENALIZATION CUTOFF"
        variant="standard"
        defaultValue="5"
      />
      <TextField
        id="standard-basic"
        label="PREDICTED PRIMARY REGION SCORE"
        variant="standard"
        defaultValue="10"
      />{" "}
      <TextField
        id="standard-basic"
        label="CRAWL SCORE"
        variant="standard"
        defaultValue="12"
      />
      <TextField
        id="standard-basic"
        label=" MIN VISITS"
        variant="standard"
        defaultValue="10"
      />{" "}
      <TextField
        id="standard-basic"
        label=" PRIMARY VISITS"
        variant="standard"
        defaultValue="5"
      />
      <TextField
        id="standard-basic"
        label="UNCRAWLED PAPERS PRIORITY"
        variant="standard"
        defaultValue="0.8"
      />
      <TextField
        id="standard-basic"
        label="PRIORITY PAPERS"
        variant="standard"
        defaultValue="1.5"
      />
      <TextField
        id="standard-basic"
        label="PAYMENT SCORE"
        variant="standard"
        defaultValue="7"
      />{" "}
      <TextField
        id="standard-basic"
        label="BOUNCE SCORE"
        variant="standard"
        defaultValue="0.3"
      />
    </Box>
  );
}
export default StepTwoItems;
