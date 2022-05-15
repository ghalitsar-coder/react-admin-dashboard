import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  Paper,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { rows } from "../constants/Table";

const List = () => {
  const handleColorStatus = (status) => {
    if (status === "Approved") {
      return "text-green-500 font-semibold bg-green-200";
    }
    return "text-orange-500 font-semibold bg-orange-200";
  };

  return (
    <TableContainer component={Paper}>
      <Table
        sx={{ width: "100%", overflow: "scroll" }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell align="left">Tracking ID</TableCell>
            <TableCell align="left">Product</TableCell>
            <TableCell align="left">Customer</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Amount</TableCell>
            <TableCell align="left">Payment Method</TableCell>
            <TableCell align="left">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">
                <div className="flex items-center  ">
                  <img
                    src={row.img}
                    alt=""
                    className="w-11 h-11 rounded-full  "
                  />
                  {row.product}
                </div>
              </TableCell>
              <TableCell align="left">{row.customer}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">{row.amount}</TableCell>
              <TableCell align="left">{row.method}</TableCell>
              <TableCell align="left">
                <span
                  className={`p-2 rounded-md ${handleColorStatus(row.status)}`}
                >
                  {row.status}
                </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default List;
