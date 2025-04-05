import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import {
  Box,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";
import { assets } from "../assets/assets";
import SearchIcon from "@mui/icons-material/Search";
import { useLocation } from "react-router-dom";

const SearchBar = () => {
  const { search, setSearch, showSearch, setShowSearch } =
    useContext(ShopContext);
  const location = useLocation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (location.pathname.includes("collection")) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [location]);
  return showSearch && visible ? (
    <>
      <Divider />
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
          marginBottom: "30PX",
          backgroundColor: "#F2F2F2",
        }}
      >
        <TextField
          sx={{
            width: "1000px",
            marginTop: "20PX",
            marginBottom: "20PX",

            "& .MuiOutlinedInput-root": {
              // backgroundColor: "#F2F2F2",
              borderRadius: "34px",
              height: "80px",
              fontSize: "1.4rem",
              fontFamily: "sans-serif",
            },
          }}
          variant="outlined"
          placeholder="What Are You Looking For Today..."
          size="small"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton>
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <Box
          component="img"
          src={assets.cross_icon}
          sx={{
            width: { xs: "20px", sm: "30px", md: "30px" },
            height: { xs: "25px", sm: "20px", md: "60px" },
          }}
          onClick={() => setShowSearch(false)}
        />
      </Box>
      <Divider />
    </>
  ) : null;
};

export default SearchBar;
