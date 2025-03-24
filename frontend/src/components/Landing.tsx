import { NavLink } from "react-router-dom";
import { assets } from "../assets/assets";
import { Box, Typography } from "@mui/material";

const Landing = () => {
  return (
    <Box sx={{ position: "relative", textAlign: "center" }}>
      <img
        src={assets.image1}
        alt="Latest Arrivals"
        style={{ width: "100%", height: "100vh", objectFit: "cover" }}
      />

      <Typography
        variant="h1"
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          fontFamily: "cursive",
          color: "white",
          padding: "10px 20px",
        }}
      >
        Latest Arrivals
      </Typography>
      <NavLink to={"/LatestArrival"}>
        <Typography
          variant="h4"
          sx={{
            position: "absolute",
            top: "59%",
            left: "49%",
            transform: "translate(-50%, -50%)",

            color: "white",
            padding: "10px 20px",
            transition: "all 0.3s ease-in-out",
            "&:hover": {
              textDecoration: "underline",
            },
          }}
        >
          Shop Now
        </Typography>
      </NavLink>
    </Box>
  );
};

export default Landing;
