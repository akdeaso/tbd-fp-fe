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
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import SendIcon from "@mui/icons-material/Send";
import { Box } from "@mui/system";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
import Footer from "../components/Footer";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import IconButton from "@mui/material/IconButton";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import axios from "axios";
import { BaseUrl } from "../helpers/apiAccessToken";
import jwtDecode from "jwt-decode";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { useNavigate } from "react-router-dom";

const AddNew = () => {
  const [category, setCategory] = useState("");
  const [allItem, setAllItem] = useState([]);
  const [allCategory, setAllCategory] = useState([]);
  const [inputFields, setInputFields] = useState([
    { itemType: "", brand: "", price: null },
  ]);
  const navigate = useNavigate();

  const [uploadedFileURLsatu, setUploadedFileURLsatu] = useState(null);
  const [uploadedFileURLdua, setUploadedFileURLdua] = useState(null);
  const [uploadedFileURLtiga, setUploadedFileURLtiga] = useState(null);
  const [uploadedFileURLempat, setUploadedFileURLempat] = useState(null);
  const [uploadedFileNamesatu, setUploadedFileNamesatu] = useState(null);
  const [uploadedFileNamedua, setUploadedFileNamedua] = useState(null);
  const [uploadedFileNametiga, setUploadedFileNametiga] = useState(null);
  const [uploadedFileNameempat, setUploadedFileNameempat] = useState(null);

  const [filesatu, setFilesatu] = useState(null);
  const [filedua, setFiledua] = useState(null);
  const [filetiga, setFiletiga] = useState(null);
  const [fileempat, setFileempat] = useState(null);

  const token = localStorage.getItem("token");
  const decoded = jwtDecode(token);
  const idUser = decoded.id;
  const username = decoded.username;

  console.log(idUser, "id");
  console.log(username, "uname");

  const handleUploadSatu = async (event) => {
    event.preventDefault();
    const form = new FormData();

    form.append("picture", filesatu);
    try {
      const results = await axios.post(`${BaseUrl}/upload-setup-photo`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setUploadedFileNamesatu(results.data.namafile);
      setUploadedFileURLsatu(results.data.url);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUploadDua = async (event) => {
    event.preventDefault();
    const form = new FormData();

    form.append("picture", filedua);
    try {
      const results = await axios.post(`${BaseUrl}/upload-setup-photo`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setUploadedFileNamedua(results.data.namafile);
      setUploadedFileURLdua(results.data.url);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUploadTiga = async (event) => {
    event.preventDefault();
    const form = new FormData();

    form.append("picture", filetiga);
    try {
      const results = await axios.post(`${BaseUrl}/upload-setup-photo`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setUploadedFileNametiga(results.data.namafile);
      setUploadedFileURLtiga(results.data.url);
    } catch (error) {
      console.log(error);
    }
  };

  const handleUploadEmpat = async (event) => {
    event.preventDefault();
    const form = new FormData();

    form.append("picture", fileempat);
    try {
      const results = await axios.post(`${BaseUrl}/upload-setup-photo`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setUploadedFileNameempat(results.data.namafile);
      setUploadedFileURLempat(results.data.url);
    } catch (error) {
      console.log(error);
    }
  };

  const handleFormChange = (index, event) => {
    const data = [...inputFields];
    const updatedData = event.target.name;
    data[index][updatedData] = event.target.value;
    setInputFields(data);
  };

  const addFields = () => {
    const values = [...inputFields];
    values.push({
      itemType: "",
      brand: "",
      price: null,
    });
    setInputFields(values);
  };

  const removeFields = (index) => {
    let data = [...inputFields];
    data.splice(index, 1);
    setInputFields(data);
  };

  console.log(inputFields);
  console.log(category);

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

  const getAllItem = async () => {
    try {
      const results = await axios.get(`${BaseUrl}/all-item`);
      setAllItem(results.data.data);
      console.log(results.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllCategory = async () => {
    try {
      const results = await axios.get(`${BaseUrl}/all-kategori`);
      setAllCategory(results.data.data);
      console.log(results.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handlePostSetup = async (e) => {
    e.preventDefault();
    try {
      const body = {
        user_id: idUser,
        user_name: username,
        type_setup: category,
        main_photo_url: uploadedFileURLsatu,
        main_photo_namefile: uploadedFileNamesatu,
        galery_photo: {
          photo: [
            {
              url: uploadedFileURLdua,
              namafile: uploadedFileNamedua,
            },
            {
              url: uploadedFileURLtiga,
              namafile: uploadedFileNametiga,
            },
            {
              url: uploadedFileURLempat,
              namafile: uploadedFileNameempat,
            },
          ],
        },
        list_detail: { inputFields },
      };
      await axios.post(`${BaseUrl}/create-setup`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllItem(), getAllCategory();
  }, []);

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
          <Grid container justifyContent={"space-between"}>
            {!uploadedFileURLsatu ? (
              <Box component={"form"} onSubmit={handleUploadSatu}>
                <Grid sx={{ mb: 2 }}>
                  <Button
                    variant="contained"
                    color="purple"
                    component="label"
                    startIcon={<PhotoCameraIcon />}
                  >
                    Choose
                    <input
                      hidden
                      accept="image/*"
                      type="file"
                      onChange={(e) => setFilesatu(e.target.files[0])}
                    />
                  </Button>
                </Grid>
                {filesatu ? (
                  <Button
                    type="submit"
                    sx={{ mb: 2 }}
                    variant="contained"
                    color="purple"
                    endIcon={<SendIcon />}
                  >
                    Upload
                  </Button>
                ) : (
                  <></>
                )}
              </Box>
            ) : (
              <Grid item xs={12} md={6} lg={3} mb={2}>
                <Card sx={{ maxWidth: 400 }}>
                  <CardMedia
                    component="img"
                    alt="Uploaded User Pic"
                    image={uploadedFileURLsatu}
                    width="100%"
                    height="200"
                  ></CardMedia>
                </Card>
              </Grid>
            )}
            {uploadedFileURLsatu ? (
              !uploadedFileURLdua ? (
                <Box component={"form"} onSubmit={handleUploadDua}>
                  <Grid sx={{ mb: 2 }}>
                    <Button
                      variant="contained"
                      color="purple"
                      component="label"
                      startIcon={<PhotoCameraIcon />}
                    >
                      Choose
                      <input
                        hidden
                        accept="image/*"
                        type="file"
                        onChange={(e) => setFiledua(e.target.files[0])}
                      />
                    </Button>
                  </Grid>
                  {filedua ? (
                    <Button
                      type="submit"
                      sx={{ mb: 2 }}
                      variant="contained"
                      color="purple"
                      endIcon={<SendIcon />}
                    >
                      Upload
                    </Button>
                  ) : (
                    <></>
                  )}
                </Box>
              ) : (
                <Grid item xs={12} md={6} lg={3} mb={2}>
                  <Card sx={{ maxWidth: 300 }}>
                    <CardMedia
                      component="img"
                      alt="Uploaded User Pic"
                      image={uploadedFileURLdua}
                      width="100%"
                      height="200"
                    ></CardMedia>
                  </Card>
                </Grid>
              )
            ) : (
              <></>
            )}
            {uploadedFileURLdua ? (
              !uploadedFileURLtiga ? (
                <Box component={"form"} onSubmit={handleUploadTiga}>
                  <Grid sx={{ mb: 2 }}>
                    <Button
                      variant="contained"
                      color="purple"
                      component="label"
                      startIcon={<PhotoCameraIcon />}
                    >
                      Choose
                      <input
                        hidden
                        accept="image/*"
                        type="file"
                        onChange={(e) => setFiletiga(e.target.files[0])}
                      />
                    </Button>
                  </Grid>
                  {filetiga ? (
                    <Button
                      type="submit"
                      sx={{ mb: 2 }}
                      variant="contained"
                      color="purple"
                      endIcon={<SendIcon />}
                    >
                      Upload
                    </Button>
                  ) : (
                    <></>
                  )}
                </Box>
              ) : (
                <Grid item xs={12} md={6} lg={3} mb={2}>
                  <Card sx={{ maxWidth: 300 }}>
                    <CardMedia
                      component="img"
                      alt="Uploaded User Pic"
                      image={uploadedFileURLtiga}
                      width="100%"
                      height="200"
                    ></CardMedia>
                  </Card>
                </Grid>
              )
            ) : (
              <></>
            )}
            {uploadedFileURLtiga ? (
              !uploadedFileURLempat ? (
                <Box component={"form"} onSubmit={handleUploadEmpat}>
                  <Grid sx={{ mb: 2 }}>
                    <Button
                      variant="contained"
                      color="purple"
                      component="label"
                      startIcon={<PhotoCameraIcon />}
                    >
                      Choose
                      <input
                        hidden
                        accept="image/*"
                        type="file"
                        onChange={(e) => setFileempat(e.target.files[0])}
                      />
                    </Button>
                  </Grid>
                  {fileempat ? (
                    <Button
                      type="submit"
                      sx={{ mb: 2 }}
                      variant="contained"
                      color="purple"
                      endIcon={<SendIcon />}
                    >
                      Upload
                    </Button>
                  ) : (
                    <></>
                  )}
                </Box>
              ) : (
                <Grid item xs={12} md={6} lg={3} mb={2}>
                  <Card sx={{ maxWidth: 300 }}>
                    <CardMedia
                      component="img"
                      alt="Uploaded User Pic"
                      image={uploadedFileURLempat}
                      width="100%"
                      height="200"
                    ></CardMedia>
                  </Card>
                </Grid>
              )
            ) : (
              <></>
            )}
          </Grid>
          <Grid>
            <FormControl sx={{ mb: 2, minWidth: 120 }}>
              <InputLabel>Category</InputLabel>
              <Select
                value={category}
                label="Category"
                onChange={(e) => setCategory(e.target.value)}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                {allCategory.map((item) => {
                  return <MenuItem value={item}>{item}</MenuItem>;
                })}
              </Select>
            </FormControl>
          </Grid>
          <Grid container spacing={3}>
            {inputFields.map((input, index) => {
              return (
                <>
                  <Grid item xs={4}>
                    <FormControl fullWidth>
                      <InputLabel>Item Type</InputLabel>
                      <Select
                        name="itemType"
                        value={input.itemType}
                        label="Item Type"
                        onChange={(event) => handleFormChange(index, event)}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        {allItem.map((item) => {
                          return <MenuItem value={item}>{item}</MenuItem>;
                        })}
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid item xs={3}>
                    <TextField
                      fullWidth
                      name="brand"
                      id="outlined-basic"
                      label="Brand"
                      variant="outlined"
                      value={input.brand}
                      onChange={(event) => handleFormChange(index, event)}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <FormControl fullWidth>
                      <InputLabel>Price</InputLabel>
                      <OutlinedInput
                        type="number"
                        startAdornment={
                          <InputAdornment position="start">Rp</InputAdornment>
                        }
                        label="Price"
                        value={input.price}
                        name="price"
                        onChange={(event) => handleFormChange(index, event)}
                      />
                    </FormControl>
                  </Grid>
                  <Grid item xs={1}>
                    <IconButton
                      aria-label="delete"
                      size="large"
                      onClick={addFields}
                    >
                      <AddCircleIcon fontSize="inherit" />
                    </IconButton>
                  </Grid>
                  <Grid item xs={1}>
                    {index === 0 ? (
                      <></>
                    ) : (
                      <IconButton
                        aria-label="delete"
                        size="large"
                        onClick={() => removeFields(index)}
                      >
                        <RemoveCircleIcon fontSize="inherit" />
                      </IconButton>
                    )}
                  </Grid>
                </>
              );
            })}
          </Grid>
          <Box
            sx={{
              mt: 2,
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            {!uploadedFileURLempat ? (
              <Button
                onClick={handlePostSetup}
                variant="contained"
                color="purple"
                endIcon={<SendIcon />}
                disabled
              >
                Post
              </Button>
            ) : (
              <Button
                onClick={handlePostSetup}
                variant="contained"
                color="purple"
                endIcon={<SendIcon />}
              >
                Post
              </Button>
            )}
          </Box>
        </Grid>
      </Container>
      <Footer width={"100%"} position={"fixed"} />
    </ThemeProvider>
  );
};

export default AddNew;
