import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";

import Grid from "@material-ui/core/Grid";
import ToppingsTable from "./ToppingsTable";
import DrinksSelection from "./DrinksSelectionForm";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
    maxWidth: 600,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(12, 1fr)",
    gridGap: theme.spacing(1),
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: "center",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(0),
  },
  paper1: {
    padding: theme.spacing(0),
    textAlign: "left",
    color: theme.palette.text.secondary,
    whiteSpace: "nowrap",
    marginBottom: theme.spacing(0),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

export default function PizzaOrder() {
  const classes = useStyles();
  const [pizzaSize, setPizzaSize, setPizzaType] = React.useState("");

  const handleSizeChange = (event) => {
    setPizzaSize(event.target.value);
  };

  const handleTypeChange = (event) => {
    setPizzaType(event.target.value);
  };

  return (
    <React.Fragment>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <InputLabel id="pizza-size-select">Pizza Size</InputLabel>
          <Select
            labelId="pizza-size"
            id="pizza-size"
            value="1"
            onChange={handleSizeChange}
          >
            <MenuItem value={1}>Extra Large</MenuItem>
            <MenuItem value={2}>Large</MenuItem>
            <MenuItem value={3}>Medium</MenuItem>
            <MenuItem value={4}>Small</MenuItem>
          </Select>
          <FormHelperText>Size of pizza</FormHelperText>
        </Grid>

        <Grid item xs={12} sm={6}>
          <InputLabel id="pizza-type-select">Pizza Type</InputLabel>
          <Select
            labelId="pizza-type"
            id="pizza-type"
            value="1"
            onChange={handleTypeChange}
          >
            <MenuItem value={1}>Thin</MenuItem>
            <MenuItem value={2}>Thick</MenuItem>
            <MenuItem value={3}>Nepolitan</MenuItem>
            <MenuItem value={4}>Sicilian</MenuItem>
            <MenuItem value={5}>Gluten Free</MenuItem>
          </Select>
          <FormHelperText>Type of pizza</FormHelperText>
        </Grid>
      </Grid>
      <ToppingsTable />
      <DrinksSelection />
    </React.Fragment>
  );
}
