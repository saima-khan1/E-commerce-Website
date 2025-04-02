import { Box, Divider, List, MenuItem, Typography } from "@mui/material";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          display: { xs: "grid", md: "grid", sm: "grid" },
          gridTemplateColumns: "Repeat(4,1fr)",
          gridTemplateRows: { xs: "Repeat(1,1fr)", sm: "Repeat(1,1fr)" },
          justifyItems: { xs: "end", md: "end", sm: "end" },

          //   justifyContent: {
          //     md: "space-evenly",
          //     xs: "space-between",
          //     sm: "space-between",
          //   },
          alignItems: { xs: "center", md: "center", sm: "center" },
          marginTop: "9rem",
        }}
      >
        <Box
          sx={{
            display: { xs: "flex", md: "flex", sm: "flex" },

            flexDirection: "column",
            justifyContent: {
              md: "space-evenly",
              xs: "space-between",
              sm: "space-between",
            },
            alignItems: "center",
          }}
        >
          {" "}
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
          <Typography>
            Forever is a modern clothing brand that blends timeless fashion with
            contemporary trends. We offer high-quality, stylish apparel designed
            for comfort and confidence. Our collections cater to diverse styles,
            from casual wear to elegant outfits. At Forever, fashion is more
            than clothing—it's a statement of individuality.
          </Typography>
        </Box>

        <Box
          sx={{
            display: { xs: "flex", md: "flex", sm: "flex" },

            flexDirection: "column",
            justifyContent: {
              md: "space-evenly",
              xs: "space-between",
              sm: "space-between",
            },
            alignItems: "center",
          }}
        >
          <Typography variant="h4" fontFamily="sans-serif" fontWeight={"600"}>
            COMPANY
          </Typography>
          <List>
            {" "}
            <MenuItem>Home</MenuItem>
            <MenuItem>About us</MenuItem>
            <MenuItem>delivery</MenuItem>
            <MenuItem>Privacy policy</MenuItem>
          </List>
        </Box>
        <Box
          sx={{
            display: { xs: "flex", md: "flex", sm: "flex" },
            flexDirection: "column",
            marginBottom: "3rem",

            justifyContent: {
              md: "space-evenly",
              xs: "space-between",
              sm: "space-between",
            },
            alignItems: "center",
          }}
        >
          <Typography variant="h4" fontFamily="sans-serif" fontWeight={"600"}>
            GET IN TOUCH
          </Typography>
          <List>
            {" "}
            <MenuItem>+1-000-000-0000</MenuItem>
            <MenuItem>forever@gmail.com</MenuItem>
            <MenuItem>Instagram</MenuItem>
          </List>
        </Box>
      </Box>
      <Divider />
      <Box
        sx={{
          display: { xs: "flex", md: "flex", sm: "flex" },
          flexDirection: "column",
          marginTop: "2rem",
          marginBottom: "2rem",

          justifyContent: {
            md: "space-evenly",
            xs: "space-between",
            sm: "space-between",
          },
          alignItems: "center",
        }}
      >
        <Typography variant="h6">
          Copyright 2025@saima khan - All Right Reserved.
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
