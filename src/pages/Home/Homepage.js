import { Link } from "react-router-dom";

import { Box, Divider, Grid, Typography } from "@mui/material";

import "./Homepage.css";
import SliderComponent from "../../components/mainSlider/MainSlider";
import SupportForm from "../../components/supportForm/SupportForm";
import FlagSlider from "../../components/flagSlider/FlagSlider";
import Reviews from "../../components/ReviewsSlider/Reviews";
import CardSlider from "../../components/cardSlider/CardSlider";

const Homepage = () => {
  return (
    <>
      <SliderComponent />
      <Grid
        container
        sx={{
          marginTop: "30px",
          padding: "20px",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <Typography variant="h4">
            Bita Consultants (Pvt) Ltd stands out as a specialized overseas
            education consultant in Pakistan
          </Typography>
          <Typography sx={{ color: "#666" }}>
            <b>Bita Consultants (Pvt) Ltd</b> stands out as a specialized
            overseas education consultant in Pakistan, distinguished by its team
            of experienced and reputable professionals offering exceptional
            services to students. The company is a forward-thinking and
            progressive entity that centers its efforts on a crucial economic
            sector: international education. <b>Bita Consultants (Pvt) Ltd</b>{" "}
            is owned and managed by industry experts with established track
            records. Their commitment to excellence and professionalism is
            unwavering, driven by a strong sense of dedication and a rich
            legacy.
            <br />
            With affiliations to over 100 colleges and universities globally,
            <b> Bita Consultants (Pvt) Ltd </b> serves as a vital resource for
            students embarking on international education journeys. Since its
            establishment in 2009, the organization has been dedicated to
            turning the educational aspirations of students into reality,
            especially those eager to pursue studies abroad. The desire for
            education across diverse destinations worldwide has witnessed a
            noticeable surge.
            <br /> <b>Bita Consultants (Pvt) Ltd</b> takes on the roles of
            guiding and counseling students who are eager to pursue education on
            an international level. The company's expertise lies in providing
            valuable guidance, making referrals, and managing the application
            process for eligible students seeking placements in foreign colleges
            and universities. In return, these institutions extend their
            responses to Pakistani students, fostering an environment of
            cross-cultural dimensions within the realm of education.
          </Typography>
        </Grid>
        <Grid item lg={4} md={4} sm={12} xs={12}>
          <SupportForm />
        </Grid>
      </Grid>
      <Grid
      container
        sx={{ background: "linear-gradient(180deg, #239ff3 0%, #1f6487 100%)",justifyContent:"center",alignItems:"center",height:"300px" }}
      >
        <Grid item xs={10} >
          <FlagSlider />
        </Grid>
      </Grid>
      <Grid container justifyContent="center" sx={{margin:"30px 0"}}>
<Grid item xs={11}>
  <Box sx={{margin:"20px 0"}}>
  <Divider>Testimonials</Divider>
  </Box>
  <CardSlider />
</Grid>

      </Grid>
    </>
  );
};

export default Homepage;
