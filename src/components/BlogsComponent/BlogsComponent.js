import { Box, Button, Grid, Typography } from "@mui/material";
import ArrowCircleRightOutlinedIcon from "@mui/icons-material/ArrowCircleRightOutlined";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";

import "./BlogsComponent.css";
import BlogsCard from "../BlogsCrads/BlogCards";
import BlogTabs from "../BlogTabs/BlogTabs";

import { shortReads, trendy } from "../../utils";
import { useRef } from "react";
import ShortReads from "../ShortReads/ShortReads";

const BlogsComponent = () => {
  function blogsContent(x) {
    return (
      <>
        <Grid
          item
          lg={6}
          md={6}
          sm={12}
          xs={12}
          sx={{ padding: "0.9rem 2rem" }}
          className="trendy"
        >
          <Box className="position">
            <Typography className="post-type">{x.type}</Typography>
            <Typography className="post-duration">{x.time}</Typography>
          </Box>
          <Typography className="post-heading">{x.name}</Typography>
          <Typography className="post-text">{x.desc}</Typography>
          <Box className="position">
            <Typography className="post-duration">{x.duration}</Typography>
            <Button className="post-btn">Read Full</Button>
          </Box>
        </Grid>
      </>
    );
  }
  function blogsImg(x) {
    return (
      <>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <img src={x.img} width="100%" height="100%" alt="blog" />
        </Grid>
      </>
    );
  }
  const slider = useRef(null);
  const shortRef = useRef(null);
  return (
    <>
      {/* <Grid container lg={12}> */}
      <Typography sx={{ textAlign: "left" }} className="post-title">
        New & Trendy
      </Typography>
      <Grid
        container
        sx={{
          borderTop: "1px solid #D6D6D6",
          padding: "10px",
          // borderTopWidth: "0.1rem",
        }}
      >
        {trendy.map((x, i) => {
          console.log("index", i % 2 == 0);
          return (
            <>
              {i % 2 == 0
                ? [blogsImg(x), blogsContent(x)]
                : [blogsContent(x), blogsImg(x)]}
            </>
          );
        })}
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ textAlign: "left" }} className="post-title">
          Now Trending
        </Typography>
        <Box>
          <ArrowCircleLeftOutlinedIcon
            onClick={() => slider?.current?.slickPrev()}
          />
          <ArrowCircleRightOutlinedIcon
            onClick={() => slider?.current?.slickNext()}
          />
        </Box>
      </Box>
      <Grid
        item
        xs={12}
        sx={{ borderTop: "1px solid #D6D6D6", padding: "2rem" }}
      >
        {/* <Grid container sx={{ borderTop: "1px solid #D6D6D6", padding: "10px" }}> */}
        <BlogsCard slider={slider} />
      </Grid>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography sx={{ textAlign: "left" }} className="post-title">
          Short Reads
        </Typography>
        <Box>
          <ArrowCircleLeftOutlinedIcon
            onClick={() => shortRef?.current?.slickPrev()}
          />
          <ArrowCircleRightOutlinedIcon
            onClick={() => shortRef?.current?.slickNext()}
          />
        </Box>
      </Box>
      <Grid
        // container
        item
        sx={{
          borderTop: "1px solid #D6D6D6",
          // padding: "10px",
          // justifyContent: "space-between",
          alignItems: "center",
          // padding: "1.5rem",
        }}
      >
        <ShortReads shortRef={shortRef} />
      </Grid>
      <Typography
        sx={{
          borderBottom: "1px solid #D6D6D6",
          marginBottom: "1.5rem",
          textAlign: "left",
        }}
        className="post-title"
      >
        Blog
      </Typography>
      <BlogTabs />
      {/* </Grid> */}
    </>
  );
};

export default BlogsComponent;
