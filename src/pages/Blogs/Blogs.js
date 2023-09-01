import { Grid, Typography } from "@mui/material";

import SupportForm from "../../components/supportForm/SupportForm";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import "./Blogs.css";
import { Portfolioimg, ServicesOffered, ServicesOfferedPartner } from "../../utils";

const Gallery = () => {
  return (
    <>
      <Grid
        className="aboutus-bg"
        container
        sx={{ display: "grid", justifyContent: "center" }}
      >
        <Grid item className="cover-margin">
          <Typography className="date-text">
            Bita Consultants (Pvt Ltd)
          </Typography>
          <Typography className="aboutus-text">
            Our Portfolio of Success Stories.
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
        <Typography className="write-text">Our Portfolio</Typography>
        <Typography className="write-paragraph">
          Step into a world of remarkable transformations with our carefully
          curated portfolio. Witness how our dedicated advertisement and
          promotion services have propelled our partner universities to new
          heights of recognition and success. Each story is a testament to our
          commitment to shaping vibrant and impactful brand images that resonate
          globally.
        </Typography>
      </Grid>
      <Grid
        item
        xs={12}
        className="About-us-bg"
        sx={{ marginBottom: "1.8rem" }}
      >

        <Grid container gap={2} sx={{ justifyContent: "center" }}>
          {Portfolioimg.map((service) => (
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
              <img src={service.image} width="100%"/>
              
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Gallery;
