// import "./CardSlider.css";
import React, { Component } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  CardActionArea,
  Grid,
  Typography,
  CardMedia,
  CardContent,
  Card,
  Divider,
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import img1 from "../../assets/can.png";
import img2 from "../../assets/chn.gif";
import img3 from "../../assets/aus.png";
import img4 from "../../assets/uk.png";
import ArrowLeft from "../../assets/arrowleft.png";
import ArrowRight from "../../assets/arrowRight.png";
import { NewArrivals } from "../../utils";

const FlagSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <ChevronRightIcon sx={{ color: "white" }} />,
    prevArrow: <ChevronLeftIcon sx={{ color: "white" }} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
    <Divider  sx={{color:"#fff"}}><b>Our Area Of Expertise </b></Divider>
    <Grid sx={{marginTop:"15px"}}>
      <Slider {...settings}>
        {slides.map((x) => {
          return (
            <Grid
            item
            lg={10}
            xs={12}
            sx={{
              color: "#FFF",
              // display: "flex",
              // flexDirection: "column",
              // alignItems: "center",
              textAlign: "center",
              border: "1px solid #fff",
              borderRadius: "5px",
              padding: "10px",
            }}
          >
              {/* <Card sx={{ maxWidth: 300, margin: "10px" }}>
                <CardActionArea> */}
                  <CardMedia
                    component="img"
                    height="150"
                    image={x}
                    alt="green iguana"
                  />
                {/* </CardActionArea>
              </Card> */}
            </Grid>
          );
        })}
      </Slider>
    </Grid>
    </>
  );
};
export default FlagSlider;
const slides = [img1, img2, img3, img4, img1];
