import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import Navbar from "../components/Navbar";
import { Container } from "@mui/system";

const Home = () => {
  const itemData = [
    {
      img: "https://blog-cdn.everhour.com/blog/wp-content/uploads/2021/02/desk-setup-idea-1.jpg",
      title: "Breakfast",
      author: "@bkristastucchio",
      rows: 2,
      cols: 2,
      featured: true,
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
      cols: 2,
    },
    {
      img: "https://blog-cdn.everhour.com/blog/wp-content/uploads/2021/02/desk-setup-idea-5.jpg",
      title: "Hats",
      author: "@hjrc33",
      cols: 2,
    },
    {
      img: "https://blog-cdn.everhour.com/blog/wp-content/uploads/2021/02/desk-setup-idea-6.jpg",
      title: "Honey",
      author: "@arwinneil",
      rows: 2,
      cols: 2,
      featured: true,
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
      rows: 2,
      cols: 2,
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
      cols: 2,
    },
  ];
  return (
    <>
      <Navbar />
      <Container fixed>
        <ImageList sx={{}} cols={3}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                actionIcon={
                  <IconButton
                    sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                    aria-label={`info about ${item.title}`}
                  >
                    <InfoIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
      ;
    </>
  );
};

export default Home;
