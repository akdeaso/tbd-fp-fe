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
import { Link } from "react-router-dom";

const Home = () => {
  const [allSetup, setAllSetup] = useState([]);
  const token = localStorage.getItem("token");

  const itemData = [
    {
      img: "https://blog-cdn.everhour.com/blog/wp-content/uploads/2021/02/desk-setup-idea-1.jpg",
      title: "Breakfast",
      author: "@bkristastucchio",
    },
    {
      img: "https://blog-cdn.everhour.com/blog/wp-content/uploads/2021/02/desk-setup-idea-2.jpg",
      title: "Burger",
      author: "@rollelflex_graphy726",
    },
    {
      img: "https://blog-cdn.everhour.com/blog/wp-content/uploads/2021/02/desk-setup-idea-3.jpg",
      title: "Camera",
      author: "@helloimnik",
    },
    {
      img: "https://blog-cdn.everhour.com/blog/wp-content/uploads/2021/02/desk-setup-idea-4.jpg",
      title: "Coffee",
      author: "@nolanissac",
    },
    {
      img: "https://blog-cdn.everhour.com/blog/wp-content/uploads/2021/02/desk-setup-idea-5.jpg",
      title: "Hats",
      author: "@hjrc33",
    },
    {
      img: "https://blog-cdn.everhour.com/blog/wp-content/uploads/2021/02/desk-setup-idea-6.jpg",
      title: "Honey",
      author: "@arwinneil",
    },
    {
      img: "https://blog-cdn.everhour.com/blog/wp-content/uploads/2021/02/desk-setup-idea-7.jpg",
      title: "Basketball",
      author: "@tjdragotta",
    },
    {
      img: "https://blog-cdn.everhour.com/blog/wp-content/uploads/2021/02/desk-setup-idea-8.jpg",
      title: "Fern",
      author: "@katie_wasserman",
    },
    {
      img: "https://blog-cdn.everhour.com/blog/wp-content/uploads/2021/02/jake-charles-Jx-LOZfxcfQ-unsplash.jpg",
      title: "Mushrooms",
      author: "@silverdalex",
    },
    {
      img: "https://blog-cdn.everhour.com/blog/wp-content/uploads/2021/02/andreas-dress-ZtD4DdClWGI-unsplash-1.jpg",
      title: "Tomato basil",
      author: "@shelleypauls",
    },
    {
      img: "https://blog-cdn.everhour.com/blog/wp-content/uploads/2021/02/desk-setup-idea-1.jpg",
      title: "Sea star",
      author: "@peterlaster",
    },
    {
      img: "https://blog-cdn.everhour.com/blog/wp-content/uploads/2021/02/desk-setup-idea-2.jpg",
      title: "Bike",
      author: "@southside_customs",
    },
  ];

  useEffect(() => {
    getAllSetup();
  }, []);

  const getAllSetup = async () => {
    try {
      const results = await axios.get(`${BaseUrl}/all-setup`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAllSetup(results.data.data);
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
      <Container fixed>
        <ImageList cols={3}>
          {allSetup.map((item, index) => (
            <ImageListItem key={index}>
              <img
                src={`${item.main_photo_url}?w=248&fit=crop&auto=format`}
                srcSet={`${item.main_photo_url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.name_setup}
                loading="lazy"
              />
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
      ;
      <Footer width={"100%"} position={"fixed"} />
    </ThemeProvider>
  );
};

export default Home;
