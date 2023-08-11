import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function GeneratedReportTable({ generatedReports }: any) {
  return (
    <TableContainer
      component={Paper}
      sx={{
        overflow: "hidden",
        borderRadius: 4,
        borderWidth: 1,
        borderColor: "rgba(234, 236, 240, 1)",
      }}
    >
      <Table
        sx={{
          minWidth: 650,
          [`& .${tableCellClasses.root}`]: {
            borderBottom: "none",
          },
        }}
        aria-label="simple table"
      >
        <TableHead sx={{ backgroundColor: "rgba(234, 236, 240, 1)" }}>
          <TableRow>
            <TableCell>Report Name</TableCell>
            <TableCell align="right">Date&nbsp;Range</TableCell>
            <TableCell align="right">Date&nbsp;and&nbsp;Time</TableCell>
            <TableCell align="right">Brand</TableCell>
            <TableCell align="right">Download</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {generatedReports.map((row: any) => (
            <TableRow
              key={row.key}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell component="th" scope="row">
                {row.reportName}
              </TableCell>
              <TableCell align="right">{row.readableDateRange}</TableCell>
              <TableCell align="right">{row.dateTime}</TableCell>
              <TableCell align="right">{row.brand}</TableCell>
              <TableCell align="right">
                <img
                  src={require("../assets/images/clock.png")}
                  style={{
                    width: 20,
                    height: 20,
                    marginLeft: 100,
                    //backgroundColor: "red",
                  }}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default GeneratedReportTable;
