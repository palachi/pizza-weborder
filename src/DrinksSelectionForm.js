import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    "&$checked": {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function DrinksSelection() {
  const [state, setState] = React.useState({
    checkedCoke: false,
    checkedDietCoke: false,
    checkedWater: false,
    checkedAppleJuice: false,
    checkedBeer: false,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup>
      <h3 align="center">Select Drinks</h3>
      <FormGroup row>
        <FormControlLabel
          control={
            <GreenCheckbox
              checked={state.checkedCoke}
              onChange={handleChange}
              name="checkedCoke"
            />
          }
          label="Coke"
        />
        <FormControlLabel
          control={
            <GreenCheckbox
              checked={state.checkedDietCoke}
              onChange={handleChange}
              name="checkedDietCoke"
            />
          }
          label="Diet Coke"
        />
        <FormControlLabel
          control={
            <GreenCheckbox
              checked={state.checkedWater}
              onChange={handleChange}
              name="checkedWater"
            />
          }
          label="Mineral Water"
        />
        <FormControlLabel
          control={
            <GreenCheckbox
              checked={state.checkedAppleJuice}
              onChange={handleChange}
              name="checkedAppleJuice"
            />
          }
          label="Apple Juice"
        />
        <FormControlLabel
          control={
            <GreenCheckbox
              checked={state.checkedBeer}
              onChange={handleChange}
              name="checkedBeer"
            />
          }
          label="Beer"
        />
      </FormGroup>
    </FormGroup>
  );
}
