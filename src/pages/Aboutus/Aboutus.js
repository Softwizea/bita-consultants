import { Grid, Typography } from "@mui/material";

import SupportForm from "../../components/supportForm/SupportForm";
import "./Aboutus.css";

const Aboutus = () => {
  return (
    <>
      <Grid
        className="aboutus-bg"
        container
        sx={{ display: "grid", justifyContent: "center" }}
      >
        <Grid item className="cover-margin">
          <Typography className="date-text">Jeff Bezos</Typography>
          <Typography className="aboutus-text">
          Your brand is what other people say about you when you're not in the room.
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        sx={{
          display: "grid",
          justifyContent: "center",
          marginTop: "4rem",
          marginBottom: "3rem",
        }}
      >
        <Typography className="write-text">WRITE TO US</Typography>
        <Typography className="write-paragraph">
          Do you want to expand your business digitally? It is simple, fill in
          the form with project details and we will get back with you within 24
          hours
        </Typography>
      </Grid>
      <Grid container className="Aboutus-typo" justifyContent="space-evenly">
        <Grid item lg={5} md={5} sm={10} xs={10}>
          <Typography className="getin-subtext">GET IN TOUCH</Typography>
          <Typography className="getin-text">Say</Typography>
          <Typography className="getin-textbelow">HELLO!</Typography>
        </Grid>
        <Grid item lg={5} md={5} sm={10} xs={10} className="form-support">
          <SupportForm />
        </Grid>
      </Grid>
    </>
  );
};

export default Aboutus;
