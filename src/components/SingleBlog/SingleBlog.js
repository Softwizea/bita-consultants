import { CheckBox } from "@mui/icons-material";
import { Button, InputLabel, TextField, Typography, Grid } from "@mui/material";

import demo from "../../assets/demo.png";
import "./SingleBlog.css";
const SingleBlog = () => {
  return (
    <>
      <Grid lg={10} md={10} sm={10} xs={12} justifyContent="center">
        <Typography className="sb-title">Branding, Creative</Typography>
        <Typography className="sb-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sit amet
          rutrum nulla. Donec laoreet, felis eu viverra porta, odio augue
          dapibus sapien, vel vulputate justo nulla et risus. Ut gravida gravida
          risus, a tempus justo blandit et. Proin euismod vel nisi ut aliquam.
          Vestibulum ac dui vitae quam feugiat consectetur nec nec libero. Nulla
          at tempor orci, a ullamcorper sapien. Class aptent taciti sociosqu ad
          litora torquent per conubia nostra, per inceptos himenaeos. Mauris vel
          diam sit amet purus sodales gravida. Quisque ut felis lectus. Aliquam
          finibus vehicula metus nec blandit. Donec vel tempor odio, non
          consectetur diam. Vivamus tristique nisi augue, quis scelerisque
          lectus convallis sit amet. Donec vel imperdiet nulla.
        </Typography>
        <img src={demo} width="100%" />
        <Typography className="sb-text">
          Fusce ac risus mollis, sagittis lectus ac, mattis felis. Nunc non
          imperdiet arcu, id elementum orci. Nullam congue eget tortor vitae
          cursus. Phasellus at enim vitae velit fringilla fringilla. Praesent
          ornare eget felis ut iaculis. Vestibulum bibendum condimentum dolor
          tincidunt condimentum. Suspendisse potenti. In consequat leo lacus,
          sit amet interdum odio euismod vitae. Donec gravida, nunc quis
          tincidunt efficitur, justo nisi feugiat diam, nec tincidunt tellus
          mauris eget ligula. Vestibulum et ipsum egestas, facilisis sapien id,
          tempus tortor. Suspendisse et turpis gravida, euismod erat nec,
          ultricies ante.
        </Typography>
        <Typography className="sb-qoute">
          “Your time is limited, so don’t waste it living someone else’s life.
          Don’t be trapped by dogma – which is living with the results of other
          people’s thinking.” – Steve Jobs
        </Typography>
        <Typography className="sb-text">
          Nullam congue eget tortor vitae cursus. Phasellus at enim vitae velit
          fringilla fringilla. Praesent ornare eget felis ut iaculis. Vestibulum
          bibendum condimentum dolor tincidunt condimentum. Suspendisse potenti.
          In consequat leo lacus, sit amet interdum odio euismod vitae. Donec
          gravida, nunc quis tincidunt efficitur, justo nisi feugiat diam, nec
          tincidunt tellus mauris eget ligula. Vestibulum et ipsum egestas,
          facilisis sapien id, tempus tortor. Suspendisse et turpis gravida,
          euismod erat nec, ultricies ante.
        </Typography>
        <Typography className="sb-feedback">Leave a Reply</Typography>
        <Typography className="sb-subtext">
          Your email address will not be published. Required fields are marked *
        </Typography>
        <InputLabel className="sb-subtext-title">Comment</InputLabel>
        <TextField fullWidth />
        <InputLabel className="sb-subtext-title">Name*</InputLabel>
        <TextField fullWidth />
        <InputLabel className="sb-subtext-title">Email*</InputLabel>
        <TextField fullWidth />
        <InputLabel className="sb-subtext-title">Website*</InputLabel>
        <TextField fullWidth />
        <Grid container sx={{ marginTop: "1rem", alignItems: "center" }}>
          <CheckBox />
          <Typography className="sb-subtext-title">
            Save my name, email, and website in this browser for the next time I
            comment.
          </Typography>
        </Grid>
        <Button className="post-button">Post Comment</Button>.
      </Grid>
    </>
  );
};

export default SingleBlog;
