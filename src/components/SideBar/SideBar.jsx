import React, { Component } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { AccountCircle } from "@mui/icons-material";
class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      left: false,
    };
  }

  sideMenu = [
    {
      name: "Products",
      route: "/products",
    },
    {
      name: "Add Product",
      route: "/add-product",
    },
    {
      name: "Users",
      route: "/users",
    },
    {
      name: "Setting",
      route: "/setting",
    },
  ];
  list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={this.toggleDrawer(anchor, false)}
      onKeyDown={this.toggleDrawer(anchor, false)}
    >
      <AccountCircle
        // alt="Remy Sharp"
        // src="/static/images/avatar/1.jpg"
        sx={{ width: 100, height: 100, margin: 0 }}
      />
      <List>
        {this.sideMenu?.map((text, index) => (
          <ListItem key={text.name} disablePadding>
            <Link to={text.route}>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text.name} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    this.setState({ ...this.state.left, left: open });
  };

  render() {
    return (
      <React.Fragment>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="open drawer"
          sx={{ mr: 2 }}
          onClick={this.toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* <Button >Menu</Button> */}
        <Drawer
          anchor={"left"}
          open={this.state.left}
          onClose={this.toggleDrawer(false)}
        >
          {this.list("left")}
        </Drawer>
      </React.Fragment>
    );
  }
}

export default SideBar;
