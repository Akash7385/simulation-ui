import * as React from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import { Box, Button, TableContainer } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function createData(name: string, calories: number, fat: number) {
  return { name, calories, fat };
}

const rows = [createData("jhon", 1, 1)];
function LanverStepFifth() {
  return (
    <Box sx={{ marginTop: "4rem" }}>
      <Stack sx={{ width: "100%" }} spacing={2}>
        <Alert severity="warning">
          <AlertTitle>Warning</AlertTitle>
          This is a warning Alert with a cautious title.
        </Alert>
      </Stack>
      <Button sx={{ border: "1PX solid", marginTop: "2rem" }}>
        SHOW PREVIEW
      </Button>
      <Box sx={{ marginTop: "3rem" }}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow sx={{ height: "3rem" }}>
                <TableCell>queryName</TableCell>
                <TableCell align="right">Conditions</TableCell>
                <TableCell align="right">Max Count</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.calories}</TableCell>
                  <TableCell align="right">{row.fat}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
export default LanverStepFifth;
