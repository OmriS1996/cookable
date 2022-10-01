import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { FormGroup, FormControlLabel, Checkbox } from "@mui/material";
import {
  getAllCategories,
  getItemsByCat,
  getMeasureType,
} from "../../lib/mocApiCalls";
import { useState } from "react";
import { useEffect } from "react";
import InvEditBtn from "../invEditBtn/invEditBtn";

function Row(props) {
  const { row, allOrInv } = props;
  const [open, setOpen] = React.useState(false);
  const [items, setItems] = useState();

  useEffect(() => {
    let itemsData = getItemsByCat(row.id);
    console.log(itemsData);
    if (allOrInv === true) {
      itemsData.filter((item) => item.amount > 0);
    }
    setItems(itemsData);
  }, []);

  return (
    <React.Fragment>
      <TableRow
        sx={{ "& > *": { borderBottom: "unset" } }}
        onClick={() => setOpen(!open)}
      >
        <TableCell component="th" scope="row">
          <IconButton aria-label="expand row" size="small">
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
          {row.name}
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell align="left">Item Name</TableCell>
                    <TableCell align="center">My Inventory</TableCell>
                    <TableCell align="right">Add</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {items
                    ? items.map((item) => (
                        <TableRow key={item.id}>
                          <TableCell component="th" scope="row">
                            {item.name}
                          </TableCell>
                          <TableCell>
                            {item.amount}
                            {getMeasureType(item.measureTypeId).measureShort}
                          </TableCell>
                          <TableCell align="right">
                            <InvEditBtn
                              itemId={item.id}
                              measure={
                                getMeasureType(item.measureTypeId).measureShort
                              }
                              amount={item.amount}
                            />
                          </TableCell>
                        </TableRow>
                      ))
                    : "Loading"}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

/*Row.propTypes = {
  row: PropTypes.shape({
    categoryName: PropTypes.string.isRequired,
    categoryItems: PropTypes.arrayOf(
      PropTypes.shape({
        itemName: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};*/

export default function CollapsibleTable() {
  const [rows, setRows] = useState();
  const [allOrInv, setAllOrInv] = useState(true);

  useEffect(() => {
    let catData = getAllCategories();
    setRows(catData);
  }, []);

  function checkboxChange() {
    setAllOrInv(!allOrInv);
  }

  return (
    <div>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox onChange={checkboxChange} defaultChecked />}
          label="Show my items only"
        />
      </FormGroup>
      {rows ? (
        <TableContainer component={Paper}>
          <Table aria-label="collapsible table">
            <TableHead>
              <TableRow>
                <TableCell>Item Category</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <Row key={rows.id} allOrInv={allOrInv} row={row} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        "Loading"
      )}
    </div>
  );
}
