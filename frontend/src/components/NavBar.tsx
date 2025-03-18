import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import {
  Box,
  IconButton,
  List,
  MenuItem,
  Typography,
  Container,
} from "@mui/material";

const NavBar = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "none", md: "flex" },
        justifyContent: "space-evenly",
      }}
    >
      <img src={assets.logo} />
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "none", md: "flex" },
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <List>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <MenuItem>
              <NavLink to="/">
                <Typography variant="h5">HOME</Typography>
              </NavLink>{" "}
            </MenuItem>
            <MenuItem>
              <NavLink to="/collection">
                <Typography variant="h5">COLLECTION</Typography>
              </NavLink>{" "}
            </MenuItem>
            <MenuItem>
              {" "}
              <NavLink to="/about">
                {" "}
                <Typography variant="h5">ABOUT</Typography>
              </NavLink>{" "}
            </MenuItem>
            <MenuItem>
              {" "}
              <NavLink to="/contact">
                <Typography variant="h5">CONTACT</Typography>
              </NavLink>{" "}
            </MenuItem>
          </Box>
        </List>
      </Box>
      <List>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "space-between",
          }}
        >
          <MenuItem>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <img src={assets.search_icon} />
            </IconButton>
          </MenuItem>
          <MenuItem>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <img src={assets.profile_icon} />
            </IconButton>
          </MenuItem>
          <MenuItem>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color="inherit"
            >
              <img src={assets.cart_icon} />
            </IconButton>
          </MenuItem>
        </Box>
      </List>
    </Box>
  );
};

export default NavBar;
