import "./CardSlider.css";
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
} from "@mui/material";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";

import ArrowLeft from "../../assets/arrowleft.png";
import ArrowRight from "../../assets/arrowRight.png";
import { NewArrivals } from "../../utils";

const CardSlider = () => {
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
    nextArrow: (
      <img
        src={ArrowRight}
        style={{
          color: "white",
          fontSize: 60,
        }}
      />
    ),
    prevArrow: (
      <img
        src={ArrowLeft}
        style={{ color: "white", fontSize: 60, zIndex: "1" }}
      />
    ),
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
    <div>
      <Slider {...settings}>
        {NewArrivals.map((x) => {
          return (
            <Grid>
              <Card sx={{ maxWidth: 270 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="240"
                    image={x.img}
                    alt="green iguana"
                  />
                  <CardContent sx={{ background: "#2294df" }}>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="title"
                    >
                      {x.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="sub-title"
                    >
                      {x.subText}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
      </Slider>
    </div>
  );
};
export default CardSlider;
