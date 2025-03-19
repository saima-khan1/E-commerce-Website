import { Link, NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import {
  Box,
  IconButton,
  List,
  MenuItem,
  Typography,
  Container,
} from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useState } from "react";

const linkStyle = {
  textDecoration: "none",
  color: "#2A2A2A",
};

const activeLinkStyle = {
  textDecoration: "underline",
  color: "#2A2A2A",
};

const NavBar = () => {
  const [visible, setVisible] = useState(false);
  return (
    <Box
      sx={{
        display: { xs: "flex", md: "flex", sm: "flex" },
        position: "relative",
        justifyContent: {
          md: "space-evenly",
          xs: "space-between",
          sm: "space-between",
        },
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src={assets.logo}
        sx={{
          width: { xs: "150px", sm: "150px", md: "249px" },
          height: { xs: "49px", sm: "40px", md: "71px" },
          marginTop: { xs: "10px", sm: "25px", md: "15px" },
          alignItems: "center",
        }}
      />
      <Box
        sx={{
          flexGrow: 1,
          display: { xs: "flex", md: "flex" },
          justifyContent: {
            md: "center",
            xs: "center",
            sm: "center",
          },
          alignItems: "center",
          marginTop: "15px",
        }}
      >
        <List>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <MenuItem>
              <NavLink
                to="/"
                style={({ isActive }) =>
                  isActive ? activeLinkStyle : linkStyle
                }
              >
                <Typography
                  variant="h5"
                  sx={{ textDecoration: "none", color: "inherit" }}
                >
                  HOME
                </Typography>
              </NavLink>{" "}
            </MenuItem>
            <MenuItem>
              <NavLink
                to="/collection"
                style={({ isActive }) =>
                  isActive ? activeLinkStyle : linkStyle
                }
              >
                <Typography variant="h5">COLLECTION</Typography>
              </NavLink>{" "}
            </MenuItem>
            <MenuItem>
              {" "}
              <NavLink
                to="/about"
                style={({ isActive }) =>
                  isActive ? activeLinkStyle : linkStyle
                }
              >
                {" "}
                <Typography variant="h5">ABOUT</Typography>
              </NavLink>{" "}
            </MenuItem>
            <MenuItem>
              {" "}
              <NavLink
                to="/contact"
                style={({ isActive }) =>
                  isActive ? activeLinkStyle : linkStyle
                }
              >
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
            display: "flex",
            justifyContent: { xs: "center", md: "space-evenly", xl: "center" },
            gap: { xs: "16px", sm: "10px", md: "20px" },
          }}
        >
          <MenuItem sx={{ padding: { xs: "5px", sm: "10px" } }}>
            <Box
              component="img"
              src={assets.search_icon}
              sx={{
                width: { xs: "20px", sm: "30px", md: "30px" },
                height: { xs: "25px", sm: "20px", md: "30px" },
              }}
            />
          </MenuItem>
          <MenuItem sx={{ padding: { xs: "5px", sm: "10px" } }}>
            <Link to={"/login"}>
              <Box
                component="img"
                src={assets.profile_icon}
                sx={{
                  width: { xs: "20px", sm: "30px", md: "30px" },
                  height: { xs: "25px", sm: "20px", md: "30px" },
                }}
              />
            </Link>
          </MenuItem>
          <MenuItem sx={{ padding: { xs: "5px", sm: "10px" } }}>
            <Link to={"/cart"}>
              <Box
                component="img"
                src={assets.cart_icon}
                sx={{
                  width: { xs: "20px", sm: "20px", md: "30px" },
                  height: { xs: "25px", sm: "25px", md: "30px" },
                }}
              />
            </Link>
          </MenuItem>
        </Box>
      </List>
      <IconButton
        onClick={() => setVisible(true)}
        sx={{ display: { xs: "block", sm: "block", md: "none" } }} // Visible on xs, sm; Hidden on md, lg, xl
        size="large"
        aria-label="show 4 new mails"
        color="inherit"
      >
        <MenuOutlinedIcon />
      </IconButton>
    </Box>
  );
};

export default NavBar;
