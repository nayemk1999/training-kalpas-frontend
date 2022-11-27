import {
  Button,
  FormControl,
  FormHelperText,
  Grid,
  Icon,
  Input,
  InputLabel,
  Modal,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { Component } from "react";
import { graphql } from "react-apollo";
import { useForm } from "react-hook-form";
import { add_product } from "../../apollo/product/query";
import { add_user } from "../../apollo/user/query";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "white",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export const withUseFormHook = (Component) => {
  return (props) => {
    const form = useForm();
    return <Component {...props} {...form} />;
  };
};

class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true,
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  handleClose() {
    // this.setState({ open: false });
    this.props.modal();
  }
  add_user(value) {
    this.props.addUser({
      variables: { user: value },
      onCompleted: (data) => {
        console.log("res", data);
      },
      onError: (err) => console.log("err", err),
    });
    this.handleClose();
    this.props.refetch();
  }
  onSubmit(data) {
    this.add_user(data);
    // this.handleClose();
    this.props.reset();
  }

  render() {
    const {
      register,
      handleSubmit,
      formState: { errors },
      getValues,
    } = this.props;
    return (
      <Modal
        open={this.state.open}
        // onClose={this.handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 400 }}>
          <h2 id="parent-modal-title">Add new User.</h2>
          <FormControl>
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <TextField
                    label="First Name"
                    id="margin-normal"
                    name="firstName"
                    helperText="Enter your first name"
                    {...register("firstName")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Last Name"
                    id="margin-normal"
                    name="lastName"
                    helperText="Enter lastName"
                    {...register("lastName")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Email"
                    id="margin-normal"
                    name="email"
                    helperText="Enter your email address"
                    {...register("email")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Phone Number"
                    id="margin-normal"
                    name="phoneNumber"
                    helperText="Enter phoneNumber"
                    {...register("phoneNumber")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Status"
                    id="margin-normal"
                    name="status"
                    helperText="Enter status"
                    {...register("status")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Country"
                    id="margin-normal"
                    name="country"
                    helperText="Enter country"
                    {...register("country")}
                  />
                </Grid>
              </Grid>
              <Button type="submit" variant="contained" color="primary">
                Submit
              </Button>
              {/* <Button
                type="button"
                variant="contained"
                color="primary"
                // onClick={this.props.modal}
              >
                Cancel
              </Button> */}
            </form>
          </FormControl>
        </Box>
      </Modal>
    );
  }
}

export default withUseFormHook(graphql(add_user, { name: "addUser" })(AddUser));
// export default graphql(add_product, { name: "addProduct" })(AddProduct);
