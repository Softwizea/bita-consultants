import React, { Component } from "react";

import {
  Button,
  CardActionArea,
  Grid,
  Typography,
  CardMedia,
  CardContent,
  Card,
} from "@mui/material";

import { Services } from "../../utils";

const ServicesCard = () => {
  return (
    <Grid container>
        {Services.map((x) => {
          return (
            <Grid item lg={6} md={6} sm={6} xs={12} sx={{ padding: "1rem" }}>
              <Card sx={{ maxWidth: 270 }} className="card">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={x.img}
                    alt="green iguana"
                  />
                  <CardContent className="card-content">
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="blog-title"
                    >
                      {x.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="blog-sub-title"
                    >
                      {x.subText}
                    </Typography>
                    <Grid className="position">
                      <Button className="micro-text-btn">Read Full</Button>
                    </Grid>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          );
        })}
    </Grid>
  );
};
export default ServicesCard;
