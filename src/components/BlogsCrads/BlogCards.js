import React, { Component } from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {
  Button,
  CardActionArea,
  Grid,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";

import { blogs, NewArrivals } from "../../utils";

import "./BlogCards.css";

const BlogsCard = ({ slider }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
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
      <Slider ref={slider} {...settings}>
        {blogs.map((x) => {
          return (
            <Grid sx={{ padding: "1rem" }}>
              <Card sx={{ maxWidth: 270 }} className="card">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={x.img}
                    alt="green iguana"
                  />
                  <CardContent className="card-content">
                    <Grid className="position">
                      <Typography className="micro-text">{x.type}</Typography>
                      <Typography className="micro-text">.{x.time}</Typography>
                    </Grid>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="blog-title"
                    >
                      {x.name}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="blog-sub-title"
                    >
                      {x.desc}
                    </Typography>
                    <Grid className="position">
                      <Typography className="micro-text">
                        {x.duration}
                      </Typography>
                      <Button className="micro-text-btn">Read Full</Button>
                    </Grid>
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
export default BlogsCard;
