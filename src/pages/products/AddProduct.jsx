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

class AddProduct extends Component {
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
  add_product(value) {
    this.props.addProduct({
      variables: { product: value },
      onCompleted: (data) => {
        console.log("res", data);
      },
      onError: (err) => console.log("err", err),
    });
    this.handleClose();
    this.props.refetch();
  }
  onSubmit(data) {
    this.add_product(data);
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
          <h2 id="parent-modal-title">Add new product.</h2>
          <FormControl>
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                <Grid item xs={6}>
                  <TextField
                    label="Title"
                    id="margin-normal"
                    name="title"
                    helperText="Enter your title"
                    {...register("title")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Image"
                    id="margin-normal"
                    name="image"
                    helperText="Enter image"
                    {...register("image")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Price"
                    id="margin-normal"
                    name="price"
                    helperText="Enter your price"
                    {...register("price")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Discount"
                    id="margin-normal"
                    name="discount"
                    helperText="Enter discount"
                    {...register("discount")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Stock"
                    id="margin-normal"
                    name="stock"
                    helperText="Enter stock"
                    {...register("stock")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Category"
                    id="margin-normal"
                    name="category"
                    helperText="Enter category"
                    {...register("category")}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    label="Sell"
                    id="margin-normal"
                    name="sell"
                    helperText="Enter sell"
                    {...register("sell")}
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
                    label="Postedby"
                    id="margin-normal"
                    name="postedby"
                    helperText="Enter your full name"
                    {...register("postedby")}
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

export default withUseFormHook(
  graphql(add_product, { name: "addProduct" })(AddProduct)
);
// export default graphql(add_product, { name: "addProduct" })(AddProduct);
