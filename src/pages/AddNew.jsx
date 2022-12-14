import {
  Button,
  Container,
  createTheme,
  FormHelperText,
  Grid,
  InputAdornment,
  OutlinedInput,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SendIcon from "@mui/icons-material/Send";
import { Box } from "@mui/system";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import Footer from "../components/Footer";

const AddNew = () => {
  const [category, setCategory] = useState("");
  const [itemType, setItemType] = useState("");

  const handleChangeCat = (event) => {
    setCategory(event.target.value);
  };

  const handleChangeItemType = (event) => {
    setItemType(event.target.value);
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
      <Container
        sx={{
          mt: 10,
          border: 3,
          borderRadius: 5,
          py: 3,
          borderColor: "#2D3166",
        }}
      >
        <Typography color={"#2D3166"} fontWeight="bold" fontSize={30} mb={8}>
          New Setup
        </Typography>
        <Grid sx={{ px: 2 }}>
          <Grid sx={{ mb: 2 }}>
            <Button
              variant="contained"
              color="purple"
              component="label"
              startIcon={<PhotoCameraIcon />}
            >
              Upload
              <input hidden accept="image/*" multiple type="file" />
            </Button>
          </Grid>
          <Grid>
            <FormControl sx={{ mb: 2, minWidth: 120 }}>
              <InputLabel>Category</InputLabel>
              <Select
                value={category}
                label="Category"
                onChange={handleChangeCat}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={"Workers"}>Workers</MenuItem>
                <MenuItem value={"Editor"}>Editor</MenuItem>
                <MenuItem value={"Programmer"}>Programmer</MenuItem>
                <MenuItem value={"Designer"}>Designer</MenuItem>
                <MenuItem value={"Music Producer"}>Music Producer</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid container spacing={3}>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel>Item Type</InputLabel>
                <Select
                  value={itemType}
                  label="Item Type"
                  onChange={handleChangeItemType}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Workers"}>Workers</MenuItem>
                  <MenuItem value={"Editor"}>Editor</MenuItem>
                  <MenuItem value={"Programmer"}>Programmer</MenuItem>
                  <MenuItem value={"Designer"}>Designer</MenuItem>
                  <MenuItem value={"Music Producer"}>Music Producer</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                id="outlined-basic"
                label="Brand"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth>
                <InputLabel>Price</InputLabel>
                <OutlinedInput
                  type="number"
                  startAdornment={
                    <InputAdornment position="start">Rp</InputAdornment>
                  }
                  label="Price"
                />
              </FormControl>
            </Grid>
          </Grid>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <Button variant="contained" color="purple" endIcon={<SendIcon />}>
              Post
            </Button>
          </Box>
        </Grid>
      </Container>
      <Footer width={"100%"} position={"fixed"} />
    </ThemeProvider>
  );
};

export default AddNew;
