import { Grid, Typography, IconButton, InputBase, Button } from "@mui/material";

import fb from "../../assets/fb.png";
import twitter from "../../assets/twitter.png";
import youtube from "../../assets/youtube.png";
import be from "../../assets/be.png";
import logo from "../../assets/Logob.png";
import map from "../../assets/map.png";
import email from "../../assets/email.png";
import phone from "../../assets/phone.png";
import time from "../../assets/time.png";
import satis from "../../assets/satis.png";
import credits from "../../assets/credits.png";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FooterLinks } from "../../utils";

const Footer = () => {
  const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/aboutus" },
    { name: "Services", link: "/services" },
    { name: "Blog", link: "/blogs" },
    { name: "Contact", link: "contactus" },
  ];
  return (
    <>
      <Grid className="footer-card">
        <Grid className="footer-card-grid" xs={10}>
          <Typography className="qoute-text">
            Get your quote and start your business right now
          </Typography>
          <Grid className="footer-searchbar">
            <InputBase
              sx={{ ml: 1, flex: 1, color: "white" }}
              placeholder="Email Address"
              inputProps={{ "aria-label": "Email Address" }}
            />
            <IconButton type="submit" sx={{ p: "0px" }} aria-label="search">
              <Button className="subscribe-button">Subscribe</Button>
            </IconButton>
          </Grid>
        </Grid>
      </Grid>
      <Grid className="footer">
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            marginTop: "2.7rem",
          }}
          spacing={4}
        >
          <Grid item lg={3} md={3} sm={6} xs={12} className="footer-logo">
            <img src={logo} width="50%" alt="logo" />
            <Typography className="footer-text">
              Bita Consultants (Pvt) Ltd stands out as a specialized overseas
              education consultant in Pakistan, distinguished by its team of
              experienced and reputable professionals offering exceptional
              services to students.
            </Typography>
            <Grid>
              <img
                src={fb}
                width="23px"
                height="23px"
                style={{ padding: "0.5rem" }}
              />
              <img
                src={twitter}
                width="23px"
                height="23px"
                style={{ padding: "0.5rem" }}
              />
              <img
                src={youtube}
                width="23px"
                height="23px"
                style={{ padding: "0.5rem" }}
              />
              <img
                src={be}
                width="23px"
                height="23px"
                style={{ padding: "0.5rem" }}
              />
            </Grid>
          </Grid>
          <Grid item lg={3} md={3} sm={6} xs={12}>
            <Typography className="footer-title"> Get In Touch</Typography>
            {FooterLinks.map((x) => {
              return (
                <>
                  <Grid
                    sx={{
                      alignItems: "flex-start",
                      display: "flex",
                      gap:"5px"
                    }}
                  >
                    <x.img sx={{ color: "#83bde3" }} />
                    <Typography className="footer-text">{x.text}</Typography>
                  </Grid>
                </>
              );
            })}
          </Grid>
          <Grid item lg={2} md={2} sm={6} xs={12}>
            <Typography className="footer-title">Quick Link</Typography>
            {links.map((x) => {
              return (
                <>
                  <Link to={x.link} className="link">
                    <Typography className="footer-text">{x.name}</Typography>
                  </Link>
                </>
              );
            })}
          </Grid>
          <Grid item lg={4} md={4} sm={6} xs={12}>
            <Typography className="footer-title">Satisfaction</Typography>
            <img src={satis} width="100%" />
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              borderTop: "1px solid rgba(108, 108, 108, 0.4);",
            }}
          >
            <div className="trade-mark">
              <Typography className="copy-right">
                Copyright © 2023 Bita Consultants (Pvt) Ltd
              </Typography>
              <img src={credits} className="credit-cards" />
            </div>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
