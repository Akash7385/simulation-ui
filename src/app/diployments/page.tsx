"use client";
import * as React from "react";
import { useDemoData } from "@mui/x-data-grid-generator";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { Box } from "@mui/material";

function Deployments() {
  const { data, loading } = useDemoData({
    dataSet: "Commodity",
    rowLength: 1,
    maxColumns: 1,
  });

  return (
    <>
      <Box
        sx={{
          display: "flex",
          fontWeight: "500",
          fontSize: "40px",
          justifyContent: "center",
          marginTop: "2rem",
        }}
      >
        Deployments{" "}
      </Box>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
        }}
      >
        <div
          style={{
            width: "90%",
            maxWidth: "1200px",
            marginBottom: "8rem",
          }}
        >
          <DataGrid
            {...data}
            rows={[]}
            loading={loading}
            slots={{ toolbar: GridToolbar }}
          />
        </div>
      </div>
    </>
  );
}
export default Deployments;
