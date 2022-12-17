import { Container } from "@mui/system";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import MobileStepper from "@mui/material/MobileStepper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { BaseUrl } from "../helpers/apiAccessToken";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import jwtDecode from "jwt-decode";
import Alert from "@mui/material/Alert";
import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import CircularProgress from "@mui/material/CircularProgress";

const Detail = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const [setupById, setSetupById] = useState([]);
  const [rows, setRows] = useState([]);
  const [liked, setLiked] = useState(false);
  const [totalLike, setTotalLike] = useState("");
  const [likeMsg, setLikeMsg] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const token = localStorage.getItem("token");
  const decoded = jwtDecode(token);
  const idUser = decoded.id;

  const { id } = useParams();
  console.log(id);

  const handleLike = async () => {
    if (!liked) {
      setLiked(true);
      try {
        const body = {
          user_id: idUser,
          setup_id: id,
        };
        const results = await axios.post(`${BaseUrl}/like-setup`, body, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (results.data.msg === "liked") {
          setTotalLike(totalLike + 1);
        } else {
          setLikeMsg(results.data.msg);
        }
      } catch (error) {
        console.log(error);
        setLikeMsg(error.response.data.msg);
      }
    } else {
      setLiked(false);
    }
  };

  const handleHide = async (e) => {
    e.preventDefault();
    try {
      const body = "";
      await axios.post(`${BaseUrl}/hide-setup/${setupById.id}`, body, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  console.log(likeMsg, "likemsg");

  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  const getSetupById = async () => {
    try {
      setLoading(true);
      const results = await axios.get(`${BaseUrl}/setup/${id}`);
      setSetupById(results.data.data.data);
      setRows(results.data.data.data.content_list_detail.inputFields, "rows");
      setLoading(false);
      console.log(results.data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSetupById(), setTotalLike(setupById.total_like);
  }, [id, setupById.total_like]);

  console.log(setupById, "by id");

  const maxSteps = 4;

  const capitalize = (sentence) => {
    return sentence.charAt(0).toUpperCase() + sentence.slice(1);
  };

  const columns = [
    { field: "itemType", headerName: "Item Type", width: 150 },
    { field: "brand", headerName: "Brand", width: 150 },
    { field: "price", headerName: "Price", width: 150 },
  ];

  //   const rows = setupById.content_list_detail.inputFields;
  //   console.log(rows);
  //   console.log(liked);

  return (
    <>
      <Navbar />
      <Container
        sx={{
          mt: 10,
          border: 3,
          borderRadius: 5,
          borderColor: "#2D3166",
          p: 4,
        }}
      >
        {loading ? (
          <Container sx={{ display: "flex", justifyContent: "center", my: 5 }}>
            <CircularProgress size={50} sx={{ display: "flex" }} />
          </Container>
        ) : (
          <Box sx={{ flexGrow: 1, p: 3 }}>
            <Grid container spacing={1}>
              <Grid item xs={7}>
                <Box sx={{ maxWidth: 600, flexGrow: 1 }}>
                  <AutoPlaySwipeableViews
                    axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                    index={activeStep}
                    onChangeIndex={handleStepChange}
                    enableMouseEvents
                  >
                    {setupById.list_photo?.map((step, index) => (
                      <div>
                        {Math.abs(activeStep - index) <= 2 ? (
                          <Box
                            component="img"
                            sx={{
                              height: "100%",
                              display: "block",
                              // maxWidth: 400,
                              overflow: "hidden",
                              width: "100%",
                            }}
                            src={step}
                            alt={step}
                          />
                        ) : null}
                      </div>
                    ))}
                  </AutoPlaySwipeableViews>
                  <MobileStepper
                    steps={maxSteps}
                    position="static"
                    activeStep={activeStep}
                    nextButton={
                      <Button
                        sx={{ color: "#2D3166" }}
                        size="small"
                        onClick={handleNext}
                        disabled={activeStep === maxSteps - 1}
                      >
                        Next
                        {theme.direction === "rtl" ? (
                          <KeyboardArrowLeft />
                        ) : (
                          <KeyboardArrowRight />
                        )}
                      </Button>
                    }
                    backButton={
                      <Button
                        sx={{ color: "#2D3166" }}
                        size="small"
                        onClick={handleBack}
                        disabled={activeStep === 0}
                      >
                        {theme.direction === "rtl" ? (
                          <KeyboardArrowRight />
                        ) : (
                          <KeyboardArrowLeft />
                        )}
                        Back
                      </Button>
                    }
                  />
                </Box>
                <Grid sx={{ justifyContent: "space-between", display: "flex" }}>
                  <Button
                    sx={{
                      backgroundColor: "#2D3166",
                      "&:hover": {
                        backgroundColor: "#2D3166",
                        color: "white",
                        display: "flex",
                      },
                    }}
                    variant="contained"
                    startIcon={<FavoriteBorderIcon />}
                    onClick={handleLike}
                  >
                    {totalLike} Like
                  </Button>
                  {setupById.user_id == idUser ? (
                    <Button
                      sx={{
                        backgroundColor: "#2D3166",
                        "&:hover": {
                          backgroundColor: "#2D3166",
                          color: "white",
                        },
                        display: "flex",
                      }}
                      variant="contained"
                      startIcon={<RemoveCircleOutlineIcon />}
                      onClick={handleHide}
                    >
                      Hide
                    </Button>
                  ) : (
                    <></>
                  )}
                </Grid>
                <Box sx={{ mt: 2 }}>
                  {!likeMsg ? <></> : <Alert severity="info">{likeMsg}</Alert>}
                </Box>
              </Grid>
              <Grid item xs={5}>
                <Typography
                  sx={{ color: "#2D3166" }}
                  fontWeight="bold"
                  fontSize={30}
                >
                  {capitalize(`${setupById.name_setup}`)}
                </Typography>
                <Typography
                  // sx={{
                  //   color: "#2D3166",
                  // }}
                  fontSize={20}
                  align={"center"}
                >
                  by {setupById.username}
                </Typography>
                <Box sx={{ height: 300, width: "100%", mt: 2 }}>
                  <DataGrid
                    rows={rows}
                    columns={columns}
                    getRowId={(row) => row.itemType + row.brand}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
        )}
      </Container>
    </>
  );
};

export default Detail;
