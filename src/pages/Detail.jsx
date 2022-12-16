import { Container } from "@mui/system";
import React, { useState } from "react";
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

const Detail = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

  const itemData = {
    data: {
      id: 1,
      user_id: "1",
      type_setup: "Gamers",
      name_setup: "undefined Gamers Setup",
      main_photo_url:
        "http://res.cloudinary.com/drakr4vtu/image/upload/v1670751440/mydesktop/Desktop%20Setup%201670751438536.jpg",
      main_photo_namefile: "Desktop Setup 1670751438536",
      list_detail_id: "6399a79e1b7088e3e29a80b1",
      list_photo_id: "6399a7a01b7088e3e29a80b2",
      status: "show",
      content_list_detail: {
        _id: "6399a79e1b7088e3e29a80b1",
        keyboard: {
          merk: "aula",
          harga: "12300000",
        },
        monitor: {
          merk: "samsung",
          harga: "1450000",
        },
        mouse: {
          merk: "rexus",
          harga: "1430000",
        },
      },
      content_list_photo: {
        _id: "6399a7a01b7088e3e29a80b2",
        photo: [
          {
            url: "http://res.cloudinary.com/drakr4vtu/image/upload/v1671013895/mydesktop/Desktop%20Setup%201671013893364.jpg",
            namafile: "Desktop Setup 1671013893364",
          },
          {
            url: "http://res.cloudinary.com/drakr4vtu/image/upload/v1671013930/mydesktop/Desktop%20Setup%201671013929806.jpg",
            namafile: "Desktop Setup 1671013929806",
          },
          {
            url: "http://res.cloudinary.com/drakr4vtu/image/upload/v1670751440/mydesktop/Desktop%20Setup%201670751438536.jpg",
            namafile: "Desktop Setup 1670751438536",
          },
        ],
      },
      total_like: 1,
    },
  };

  const images = [
    {
      label: "San Francisco – Oakland Bay Bridge, United States",
      imgPath:
        "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      label: "Bird",
      imgPath:
        "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
    },
    {
      label: "Bali, Indonesia",
      imgPath:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
    },
    {
      label: "Goč, Serbia",
      imgPath:
        "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
    },
  ];

  const maxSteps = itemData.data.content_list_photo.photo.length;

  console.log(itemData.data.content_list_photo.photo);

  return (
    <>
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
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={7}>
              <Box sx={{ maxWidth: 600, flexGrow: 1 }}>
                <AutoPlaySwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={activeStep}
                  onChangeIndex={handleStepChange}
                  enableMouseEvents
                >
                  {itemData.data.content_list_photo.photo.map((step, index) => (
                    <div key={step.namafile}>
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
                          src={step.url}
                          alt={step.namafile}
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
            </Grid>
            <Grid item xs={3}>
              tes
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default Detail;
