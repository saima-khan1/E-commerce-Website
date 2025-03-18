import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";

import { AppBar, Box, List, MenuItem } from "@mui/material";

const NavBar = () => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
      <img src={assets.logo} />
      <List>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
          <MenuItem>
            <NavLink to="/">HOME</NavLink>{" "}
          </MenuItem>
          <MenuItem>
            <NavLink to="/collection">COLLECTION</NavLink>{" "}
          </MenuItem>
          <MenuItem>
            {" "}
            <NavLink to="/about">ABOUT</NavLink>{" "}
          </MenuItem>
          <MenuItem>
            {" "}
            <NavLink to="/contact">CONTACT</NavLink>{" "}
          </MenuItem>
        </Box>
      </List>
    </Box>
  );
};

export default NavBar;
