import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

class AddressFormClass extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      firstName: "",
      lastName: "",
      address1: "",
      address2: "",
      city: "",
      zip: "",
    };
  }

  handleChange(event) {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });

    if (this.props.updateContentReadiness !== undefined)
      this.props.updateContentReadiness(this.isContentReady());
  }

  isContentReady() {
    return (
      this.state.firstName !== "" &&
      this.state.lastName !== "" &&
      this.state.address1 !== "" &&
      this.state.city !== ""
    );
  }

  render() {
    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Shipping address
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="firstName"
              name="firstName"
              label="First name"
              fullWidth
              autoComplete="given-name"
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="lastName"
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="family-name"
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              required
              id="address1"
              name="address1"
              label="Address line 1"
              fullWidth
              autoComplete="shipping address-line1"
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              id="address2"
              name="address2"
              label="Address line 2"
              fullWidth
              autoComplete="shipping address-line2"
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              required
              id="city"
              name="city"
              label="City"
              fullWidth
              autoComplete="shipping address-level2"
              onChange={this.handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="zip"
              name="zip"
              label="Zip/Postal Code"
              fullWidth
              autoComplete="shipping postal-code"
              onChange={this.handleChange}
            />
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
}

export default AddressFormClass;
