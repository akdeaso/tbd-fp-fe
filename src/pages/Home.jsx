import React, { useEffect, useState } from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Navbar from "../components/Navbar";
import { Container } from "@mui/system";
import { Box, createTheme, Fab, ThemeProvider } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Footer from "../components/Footer";
import { BaseUrl } from "../helpers/apiAccessToken";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";

const Home = () => {
  const [allSetup, setAllSetup] = useState([]);
  const token = localStorage.getItem("token");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    getAllSetup(), checkToken();
  }, []);

  const checkToken = () => {
    if (!token) {
      navigate("/login");
    }
  };

  const getAllSetup = async () => {
    try {
      setLoading(true);
      const results = await axios.get(`${BaseUrl}/all-setup`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAllSetup(results.data.data);
      setLoading(false);
      console.log(results.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const { palette } = createTheme();
  const { augmentColor } = palette;
  const createColor = (mainColor) =>
    augmentColor({ color: { main: mainColor } });
  const theme = createTheme({
    palette: {
      purple: createColor("#2D3166"),
      lightPurple: createColor("#A8ACE6"),
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Box sx={{ "& > :not(style)": { m: 1 } }}>
        <Fab
          color="purple"
          aria-label="add"
          sx={{
            margin: 0,
            top: "auto",
            right: 20,
            bottom: 20,
            left: "auto",
            position: "fixed",
          }}
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/add";
          }}
        >
          <AddIcon />
        </Fab>
      </Box>
      {loading ? (
        <Container sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
          <CircularProgress size={50} sx={{ display: "flex" }} color="purple" />
        </Container>
      ) : (
        <Container fixed>
          <ImageList cols={3}>
            {allSetup.map((item, index) => (
              <ImageListItem key={index}>
                <img src={item.main_photo_url} alt={item.name_setup} />
                <Link to={"/setup/" + item.id}>
                  <ImageListItemBar
                    title={item.name_setup}
                    subtitle={item.username}
                    actionIcon={
                      <IconButton
                        sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                        aria-label={`info about ${item.name_setup}`}
                      >
                        <InfoIcon />
                      </IconButton>
                    }
                  />
                </Link>
              </ImageListItem>
            ))}
          </ImageList>
        </Container>
      )}
      <Footer width={"100%"} position={"fixed"} />
    </ThemeProvider>
  );
};

export default Home;
