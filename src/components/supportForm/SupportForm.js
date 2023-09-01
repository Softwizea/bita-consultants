import * as React from "react";

import { Button, Grid, Typography, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

import "./SupportForm.css";

const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "white",
    borderTop: "none",
    borderRight: "none",
    borderLeft: "none",
    borderRadius: 0,
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "white",
    borderTop: "none",
    borderRight: "none",
    borderLeft: "none",
    borderRadius: 0,
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderBottomColor: "white",
      // borderColor: "white",
      borderTop: "none",
      borderRight: "none",
      borderLeft: "none",
      color: "white",
      borderRadius: 0,
    },
    color: "white",
    "&:hover fieldset": {
      borderBottomColor: "white",
      borderTop: "none",
      borderRight: "none",
      borderLeft: "none",
      color: "white",
      borderRadius: 0,
    },
    "&.Mui-focused fieldset": {
      borderBottomColor: "white",
      borderTop: "none",
      borderRight: "none",
      borderLeft: "none",
      color: "white",
      borderRadius: 0,
    },
  },
});

export default function SupportForm() {
  return (
    <Grid
      component="form"
      sx={{
        "& > :not(style)": { m: 1, maxWidth: "62ch" },
        display: "grid",
        backgroundColor: "black",
        color: "white",
        borderRadius: "10px",
        padding: "2rem",
      }}
      noValidate
      autoComplete="off"
    >
      <Typography className="Inquire-text">For Any Inquires</Typography>
      <CssTextField
        id="custom-css-outlined-input"
        // label="Name"
        placeholder="Name"
      />
      <CssTextField
        id="custom-css-outlined-input"
        // label="Email Address"
        placeholder="Email Address"
      />
      <CssTextField
        id="custom-css-outlined-input"
        // label="Contact Num"
        placeholder="Contact Num"
      />
      <CssTextField
        id="custom-css-outlined-input"
        // label="Select Country"
        placeholder="Select Country"
      />
      <CssTextField
        id="custom-css-outlined-input"
        // label="Message"
        placeholder="Message"
      />
      {/* dsdsdsds */}

      <Button className="send-btn">Send Message</Button>
    </Grid>
  );
}
