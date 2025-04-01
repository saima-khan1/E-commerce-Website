import { Box, Button, InputBase, Typography } from "@mui/material";

const NewsLetterBox = () => {
  return (
    <Box
      sx={{
        textAlign: "center",
        marginTop: "66px",
        display: "flex",
        flexDirection: { xs: "column", sm: "column", md: "column" },
        alignItems: { xs: "center", sm: "center", md: "center" },
      }}
    >
      <Typography
        variant="h5"
        marginTop={{ xs: "14px", sm: "14px", md: "40px" }}
        fontWeight="600"
        fontSize={{ xs: "1rem", sm: "1rem", md: "2rem" }}
      >
        10% discount on your next purchase if you sign up for the newsletter
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: "1px solid #ccc",
          borderRadius: "8px",
          overflow: "hidden",
          width: { md: 900, sm: 800, xs: 350 },
          height: { sm: 55, xs: 50 },
          marginTop: "50px",
          marginBottom: "10px",
        }}
      >
        <InputBase
          sx={{ flex: 1, padding: "8px", fontSize: "18px" }}
          placeholder="Enter your email..."
        />
        <Button
          variant="contained"
          sx={{
            borderRadius: 0,
            lineHeight: 4,
            color: "white",
            backgroundColor: "black",
          }}
        >
          Subscribe
        </Button>
      </Box>

      <Typography
        variant="h5"
        marginTop={{ xs: "8px", sm: "8px", md: "20px" }}
        color="gray"
        fontSize={{ xs: "1rem", sm: "1rem", md: "1.5rem" }}
      >
        By subscribing you confirm that you have read ourPrivacy Policy.
      </Typography>
    </Box>
  );
};

export default NewsLetterBox;
