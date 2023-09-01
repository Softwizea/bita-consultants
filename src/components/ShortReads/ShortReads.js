import { Grid, Typography } from "@mui/material";

import { shortReads } from "../../utils";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./ShortReads.css";
const ShortReads = ({ shortRef }) => {
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
    <>
      <Slider ref={shortRef} {...settings}>
        {shortReads.map((x) => {
          return (
            <Grid className="short">
              <Grid item xs={10}>
                <img
                  src={x.img}
                  width={130}
                  // height="100%"
                  // style={{ marginRight: "1rem" }}
                />
              </Grid>
              <Grid item xs={10}>
                <Typography className="short-read-title">{x.name}</Typography>
                <Typography className="short-read-desc">{x.desc}</Typography>
              </Grid>
            </Grid>
          );
        })}
      </Slider>
    </>
  );
};

export default ShortReads;
