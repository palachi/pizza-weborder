import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import AddressFormClass from "./AddressForm";
import PizzaOrderForm from "./PizzaOrderForm";
import PaymentForm from "./PaymentForm";
import Review from "./Review";
import { withStyles } from "@material-ui/styles";
import PropTypes from "prop-types";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        ProjectX
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const styles = (theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: "25%",
    marginRight: "25%",
  },
  paper: {
    marginTop: 50,
    marginBottom: 50,
    padding: 50,
  },
  stepper: {
    padding: 50,
  },
  buttons: {
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: 30,
    marginLeft: 30,
  },
});

class OnlineOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeStep: 0,
      isChildContentReady: false,
    };
  }

  steps = ["Delivery", "Order", "Payment", "Summary"];

  updateContentReadiness = (isContentReady) => {
    this.setState({ isChildContentReady: isContentReady });
  };

  getStepContent(step) {
    switch (step) {
      case 0:
        return (
          <AddressFormClass
            updateContentReadiness={this.updateContentReadiness}
          />
        );
      case 1:
        return (
          <PizzaOrderForm
            updateContentReadiness={this.updateContentReadiness}
          />
        );
      case 2:
        return (
          <PaymentForm updateContentReadiness={this.updateContentReadiness} />
        );
      case 3:
        return <Review updateContentReadiness={this.updateContentReadiness} />;
      default:
        throw new Error("Unknown step");
    }
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <AppBar position="absolute" color="default" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Cool Pizza OnLine Order
            </Typography>
          </Toolbar>
        </AppBar>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
              Cool Hot Pizza Order
            </Typography>
            <Stepper
              activeStep={this.state.activeStep}
              className={classes.stepper}
            >
              {this.steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {this.state.activeStep === this.steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your order.
                  </Typography>
                  <Typography variant="subtitle1">
                    Your order number is #2001539. We have emailed your order
                    confirmation, and will send you an update when your order
                    has shipped.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {this.getStepContent(this.state.activeStep)}
                  <div className={classes.buttons}>
                    {this.state.activeStep !== 0 && (
                      <Button
                        onClick={() =>
                          this.setState({
                            activeStep: this.state.activeStep - 1,
                          })
                        }
                        className={classes.button}
                      >
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() =>
                        this.setState({ activeStep: this.state.activeStep + 1 })
                      }
                      className={classes.button}
                      disabled={!this.state.isChildContentReady}
                    >
                      {this.activeStep === this.steps.length - 1
                        ? "Place order"
                        : "Next"}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </main>
        <Copyright />
      </React.Fragment>
    );
  }
}
OnlineOrder.propTypes = {
  classes: PropTypes.object.isRequired,
};
export default withStyles(styles)(OnlineOrder);
