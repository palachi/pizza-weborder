import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Green Olives"),
  createData("Black Olives"),
  createData("Mushrooms"),
  createData("Extra cheese"),
  createData("Feta"),
  createData("Tomatos"),
];

export default function ToppingsTable() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl, setCoverSize] = React.useState("");

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCoverChange = (event) => {
    setCoverSize(event.target.value);
  };

  return (
    <p>
      <TableContainer component={Paper}>
        <h3 align="center">Select Toppings</h3>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center">Topping</TableCell>
              <TableCell align="center">Cover</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell component="th" scope="row">
                  <RadioGroup
                    row
                    name="coverage"
                    aria-label="coverage"
                    defaultValue="no"
                  >
                    <FormControlLabel
                      value="no"
                      control={<Radio color="primary" />}
                      label="No Thanks"
                      size="small"
                    />
                    <FormControlLabel
                      value="all"
                      control={<Radio color="primary" />}
                      label="All"
                      size="small"
                    />
                    <FormControlLabel
                      value="left"
                      control={<Radio color="primary" />}
                      label="Left"
                      size="small"
                    />
                    <FormControlLabel
                      value="right"
                      control={<Radio color="primary" />}
                      label="Right"
                      size="small"
                    />
                  </RadioGroup>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </p>
  );
}
