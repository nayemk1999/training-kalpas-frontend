import React, { Component } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Avatar, Button, Container, Typography } from "@mui/material";
// import ProductData from "../../jsondata/product.json";
import ImageIcon from "@mui/icons-material/Image";

class CommonTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      open: false,
      anchorEl: null,
    };
  }
  render() {
    const { data, column, title } = this.props;
    return (
      <React.Fragment>
        <Container maxWidth="xl">
          <Paper>
            <Typography variant="h4" color="inherit">
              {title}
            </Typography>

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
                  {data.map((emp, index) => (
                    <TableRow key={index}>
                      {column.map((header, i) => (
                        <TableCell align="center" key={i}>
                          {header.key == "image" ? (
                            <Avatar src={emp[header.key]} variant="rounded">
                              <ImageIcon />
                            </Avatar>
                          ) : header.key == "action" ? (
                            <Button variant="contained" color="success">
                              Action
                            </Button>
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
        </Container>
      </React.Fragment>
    );
  }
}

export default CommonTable;
