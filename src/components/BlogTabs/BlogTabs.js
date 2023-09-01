import * as React from "react";
import PropTypes from "prop-types";

import {
  Button,
  CardActionArea,
  Grid,
  CardMedia,
  CardContent,
  Card,
  Box,
  Typography,
  Tab,
  Tabs,
} from "@mui/material";

import "./BlogTabs.css";
import blogimg from "../../assets/blogpost2.png";

import { shortReads } from "../../utils";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          indicatorColor="#F36823"
        >
          <Tab label="comedy" {...a11yProps(0)} className="tabs" Indi />
          <Tab label="fantasy" {...a11yProps(1)} className="tabs" />
          <Tab label="drama" {...a11yProps(2)} className="tabs" />
          <Tab label="action" {...a11yProps(3)} className="tabs" />
          <Tab label="history" {...a11yProps(4)} className="tabs" />
          <Tab label="military" {...a11yProps(5)} className="tabs" />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Grid container>
          <Grid container className="tab-grid" lg={8} md={8} sm={12} xs={12}>
            <Grid sx={{ padding: "1rem" }}>
              <Card sx={{ maxWidth: 270 }} className="card">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="200"
                    image={blogimg}
                    alt="green iguana"
                  />
                  <CardContent className="card-content">
                    {/* <Grid className="position"> */}
                    <Typography className="micro-text">
                      1 Month Ago{" "}
                    </Typography>{" "}
                    {/* <Typography className="micro-text">.{x.time}</Typography> */}
                    {/* </Grid> */}
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      className="blog-title"
                    >
                      Attack On Titans
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      className="blog-sub-title"
                    >
                      lit. Phasellus aliquet nibh id iaculis pharetra. Maecenas
                      eleifend sed ex. Donec quis magna sed felis elementum
                      blandit nec quis sem. Maecen.
                    </Typography>
                    {/* <Grid className="position">
                    <Typography className="micro-text">{x.duration}</Typography> */}
                    <Button className="micro-text-btn">Load more</Button>
                    {/* </Grid> */}
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid sx={{ display: "grid", alignItems: "center" }}>
              {shortReads.map((x) => {
                return (
                  <Grid
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                    lg={8}
                  >
                    <Grid item>
                      <img
                        src={x.img}
                        width={100}
                        style={{ marginRight: "0.5rem" }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography className="short-read-title">
                        {x.name}
                      </Typography>
                      <Typography className="short-read-desc">
                        21 Mar 2021
                      </Typography>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
          <Grid container className="tab-subGrid" lg={3} md={3} sm={12} xs={12}>
            <Grid sx={{ display: "grid" }}>
              <Typography className="topic">Manga Reads</Typography>
              {shortReads.map((x) => {
                return (
                  <Grid
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                    // lg={8}
                  >
                    <Grid item>
                      <img
                        src={x.img}
                        width={100}
                        style={{ marginRight: "0.5rem" }}
                      />
                    </Grid>
                    <Grid item>
                      <Typography className="short-read-title">
                        {x.name}
                      </Typography>
                      <Typography className="short-read-desc">
                        21 Mar 2021
                      </Typography>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
  );
}
