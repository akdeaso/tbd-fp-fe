import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Link from "@mui/material/Link";

const Copyright = () => {
  return (
    <Typography
      variant="body1"
      color="white"
      fontWeight={"bold"}
      textAlign={"center"}
    >
      {"Copyright © "}
      <Link color="inherit" href="/">
        TBD Project
      </Link>{" "}
      {new Date().getFullYear()}
    </Typography>
  );
};

const Footer = ({ width, position }) => {
  return (
    <Box
      component="footer"
      sx={{
        py: 3,
        px: 2,
        mt: "auto",
        backgroundColor: "#2D3166",
        width: { width },
        position: { position },
        bottom: 0,
      }}
    >
      <Copyright />
    </Box>
  );
};

export default Footer;
