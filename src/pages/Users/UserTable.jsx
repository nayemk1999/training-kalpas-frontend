import React, { Component } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Box, Button, Container, Typography } from "@mui/material";
import ImageIcon from "@mui/icons-material/Image";
import { graphql } from "react-apollo";
import { Link } from "react-router-dom";

import { delete_product } from "../../apollo/product/query";
import AddUser from "./AddUser";
import { delete_user } from "../../apollo/user/query";

class UserTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      open: false,
      anchorEl: null,
      addModal: false,
    };
  }

  delete_user(id) {
    const r = window.confirm("Are you sure you wish to delete this item?");
    if (!r) {
      return;
    }
    this.props.deleteUser({
      variables: { deleteUserId: id },
      onCompleted: (data) => {
        console.log("res", data);
      },
      onError: (err) => console.log("err", err),
    });
    this.props.refetch();
  }
  addUserModal() {
    this.setState({
      addModal: true,
    });
  }
  closeModal() {
    this.setState({
      addModal: false,
    });
  }

  render() {
    const { data, column, title } = this.props;
    return (
      <React.Fragment>
        <Container maxWidth="xl">
          <Paper>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography variant="h4" color="inherit">
                {title}
              </Typography>
              <Typography variant="h4" color="inherit">
                <Button
                  variant="contained"
                  color="success"
                  onClick={() => this.addUserModal(this)}
                >
                  Add New
                </Button>
              </Typography>
            </Box>

            <hr />
            <TableContainer component={Paper} className="table">
              <Table>
                <TableHead>
                  <TableRow>
                    {column?.map((header, i) => (
                      <TableCell align="center" key={i}>
                        {header.title}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {data?.map((emp, index) => (
                    <TableRow key={index}>
                      {column.map((header, i) => (
                        <TableCell align="center" key={i}>
                          {header.key == "image" ? (
                            <Avatar src={emp[header.key]} variant="rounded">
                              <ImageIcon />
                            </Avatar>
                          ) : header.key == "action" ? (
                            <Typography sx={{ display: "flex", gap: "5px" }}>
                              <Link to={`/user/${emp.id}`}>
                                <Button variant="contained" color="success">
                                  View
                                </Button>
                              </Link>

                              <Button
                                variant="contained"
                                color="error"
                                onClick={() => this.delete_user(emp.id)}
                              >
                                Deleted
                              </Button>
                            </Typography>
                          ) : (
                            emp[header.key]
                          )}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
          {this.state.addModal && (
            <AddUser
              modal={() => this.closeModal(this)}
              refetch={this.props.refetch}
            />
          )}
        </Container>
      </React.Fragment>
    );
  }
}
export default graphql(delete_user, { name: "deleteUser" })(UserTable);
