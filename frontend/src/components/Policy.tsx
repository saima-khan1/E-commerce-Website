import { Box, Typography } from "@mui/material";
import { assets } from "../assets/assets";
import NewsLetterBox from "./NewsLetterBox";

const Policy = () => {
  return (
    <>
      <Box
        sx={{
          textAlign: "center",

          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          alignItems: { xs: "center", sm: "center", md: "flex-start" },
          justifyContent: "space-around",
        }}
      >
        <Box
          sx={{
            display: "grid",
            justifyContent: "start",
            justifyItems: "center",
          }}
        >
          <Box
            component="img"
            src={assets.exchange_icon}
            sx={{
              width: { xs: "50px", sm: "50px", md: "78px" },
              //   height: { xs: "49px", sm: "40px", md: "71px" },
              marginTop: { xs: "14px", sm: "14px", md: "40px" },
              alignItems: "center",
            }}
          />
          <Typography
            variant="h5"
            marginTop={{ xs: "14px", sm: "14px", md: "40px" }}
            fontWeight="600"
            fontSize={{ xs: "1rem", sm: "1rem", md: "1.5rem" }}
          >
            Easy Exchange Policy
          </Typography>
          <Typography
            variant="h5"
            marginTop={{ xs: "8px", sm: "8px", md: "20px" }}
            color="gray"
            fontSize={{ xs: "1rem", sm: "1rem", md: "1.5rem" }}
          >
            We offer hastle free exchange policy
          </Typography>
        </Box>
        <Box
          sx={{
            display: "grid",
            justifyContent: "start",
            justifyItems: "center",
          }}
        >
          <Box
            component="img"
            src={assets.quality_icon}
            sx={{
              width: { xs: "50px", sm: "50px", md: "78px" },
              //   height: { xs: "49px", sm: "40px", md: "71px" },
              marginTop: { xs: "10px", sm: "25px", md: "40px" },
              alignItems: "center",
            }}
          />
          <Typography
            variant="h5"
            marginTop={{ xs: "14px", sm: "14px", md: "40px" }}
            fontWeight="600"
            fontSize={{ xs: "1rem", sm: "1rem", md: "1.5rem" }}
          >
            7 Days Return Policy
          </Typography>
          <Typography
            variant="h5"
            marginTop={{ xs: "8px", sm: "8px", md: "20px" }}
            color="gray"
            fontSize={{ xs: "1rem", sm: "1rem", md: "1.5rem" }}
          >
            We provide 7days free return policy
          </Typography>
        </Box>
        <Box
          sx={{
            display: "grid",
            justifyContent: "start",
            justifyItems: "center",
          }}
        >
          <Box
            component="img"
            src={assets.support_img}
            sx={{
              width: { xs: "40px", sm: "40px", md: "65px" },
              //   height: { xs: "49px", sm: "40px", md: "71px" },
              marginTop: { xs: "10px", sm: "25px", md: "40px" },

              alignItems: "center",
            }}
          />
          <Typography
            variant="h5"
            marginTop={{ xs: "14px", sm: "14px", md: "40px" }}
            fontWeight="600"
            fontSize={{ xs: "1rem", sm: "1rem", md: "1.5rem" }}
          >
            Best Customer Support
          </Typography>
          <Typography
            variant="h5"
            marginTop={{ xs: "8px", sm: "8px", md: "20px" }}
            color="gray"
            fontSize={{ xs: "1rem", sm: "1rem", md: "1.5rem" }}
          >
            We provide 24/7 customer support
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Policy;
