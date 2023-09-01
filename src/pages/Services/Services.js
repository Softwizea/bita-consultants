import { Grid, Typography } from "@mui/material";

import SupportForm from "../../components/supportForm/SupportForm";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import "./Services.css";
import { ServicesOffered, ServicesOfferedPartner } from "../../utils";

const Services = () => {
  return (
    <>
      <Grid
        className="aboutus-bgs"
        container
        sx={{ display: "grid", justifyContent: "center" }}
      >
        <Grid item className="cover-margin">
          <Typography className="date-text">
            Bita Consultants (Pvt Ltd)
          </Typography>
          <Typography className="aboutus-text">
            Unlocking Global Horizons,Seamless Visa Solutions for Your Global
            Ambitions.
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
        <Typography className="write-text">Our Services</Typography>
        <Typography className="write-paragraph">
          Are you willing to take your educational experience to the next level?
          Is getting a quality education in world-renowned universities your
          dream? If yes, rest assured that we will ensure that you get admission
          to the best university
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        className="About-us-bg"
        sx={{ marginBottom: "1.8rem" }}
      >
        <Typography variant="h4" sx={{textAlign:"center",color:"#fff",marginBottom:"1rem"}}>Services For Students</Typography>
        
        <Grid container gap={2} sx={{ justifyContent: "center" }}>
          {ServicesOffered.map((service) => (
            <Grid
              item
              lg={3}
              xs={12}
              sx={{
                color: "#FFF",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                border: "1px solid #fff",
                borderRadius: "5px",
                padding: "10px",
              }}
            >
              <service.icon sx={{fontSize:"45px"}}/>
              <Typography>
                <b>{service.title}</b>
              </Typography>
              <Typography sx={{fontSize:"14px",color:"#d7d7d7"}}>{service.desc}</Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid
        item
        xs={12}
        className="About-us-bg"
        sx={{ marginBottom: "1.8rem" }}
      >
        <Typography variant="h4" sx={{textAlign:"center",color:"#fff",marginBottom:"1rem"}}>Services For Partner Institutions</Typography>
        
        <Grid container gap={2} sx={{ justifyContent: "center" }}>
          {ServicesOfferedPartner.map((service) => (
            <Grid
              item
              lg={3}
              xs={12}
              sx={{
                color: "#FFF",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                border: "1px solid #fff",
                borderRadius: "5px",
                padding: "10px",
              }}
            >
              <service.icon sx={{fontSize:"45px"}}/>
              <Typography>
                <b>{service.title}</b>
              </Typography>
              <Typography sx={{fontSize:"14px",color:"#d7d7d7"}}>{service.desc}</Typography>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Services;
