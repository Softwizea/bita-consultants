import { Grid, Typography } from "@mui/material";

import SupportForm from "../../components/supportForm/SupportForm";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import "../Aboutus/Aboutus.css";

const Contactus = () => {
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
        <Typography className="write-text">Contact Us</Typography>
        <Typography className="write-paragraph">
          Do you want to expand your business digitally? It is simple, fill in
          the form with project details and we will get back with you within 24
          hours
        </Typography>
      </Grid>
      <Grid container className="Aboutus-typo" justifyContent="space-evenly">
        <Grid item lg={5} md={5} sm={10} xs={10} className="About-us-bg" sx={{marginBottom:"1.8rem"}}>
          <Typography variant="h4">Contact Us </Typography>
          <Typography sx={{marginTop:"2rem"}}>Looking to get in touch? You can reach us with the info below: </Typography>
          <Grid container sx={{alignItems:"center", margin:"3rem 0"}}>
            <PhoneIcon /> <Grid sx={{margin:"0 1rem"}}>
                <Typography variant="h7">Phone</Typography>
                <Typography variant="h6">+13239048710 </Typography>
                <Typography variant="h6">Saad Hameed </Typography>
            </Grid>
          </Grid>

          <Grid container sx={{alignItems:"center", margin:"3rem 0"}}>
            <EmailIcon /> <Grid sx={{margin:"0 1rem"}}>
                <Typography variant="h7">Email</Typography>
                <Typography variant="h6">downtowncloud7@gmail.com </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item lg={5} md={5} sm={10} xs={10} className="form-support">
          <SupportForm />
        </Grid>
      </Grid>
    </>
  );
};

export default Contactus;
