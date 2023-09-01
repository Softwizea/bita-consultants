import { Link } from "react-router-dom";

import { Grid, Typography } from "@mui/material";

import "./Category.css";
import CardSlider from "../../components/cardSlider/CardSlider";
import { BestSeller } from "../../utils";
import catbg from "../../assets/car-bg.png";
import border from "../../assets/bottom.png";
import { useRef } from "react";
import { useProductStore } from "../../store";

const Category = () => {
  return (
    <>
      <Grid
        className="aboutus-bg-c"
        container
        sx={{ display: "grid", justifyContent: "center" }}
      >
        <Grid item className="cover-margin">
          <Typography className="date-text-c">June 23, 2021</Typography>
          <Typography className="aboutus-text-c">
            Six student projects that tackle “real-world issues” in 2021
          </Typography>
        </Grid>
      </Grid>
      <Typography className="arrival-text">Best Seller</Typography>
      <Grid className="border">
        <img src={border} alt="border" className="border-style" />
      </Grid>
      <Grid>
        <Grid sx={{ padding: "2rem" }}>
          <CardSlider />
        </Grid>
      </Grid>
      <Grid className="category">{/* <img src={catbg} /> */}</Grid>
      <Grid container lg={12} sx={{ padding: "5rem" }}>
        {BestSeller.map((x) => {
          return (
            <Grid
              lg={3}
              md={4}
              sm={6}
              xs={12}
              sx={{
                display: "grid",
                justifyContent: "center",
                marginTop: "70px",
              }}
            >
              <Link
                to={`/product/${x.id}`}
                className="link"
                // onClick={() => setProductId(x?.id)}
              >
                <img src={x.img} alt="kettle" width={160} />
                <Typography className="product-title">{x.title}</Typography>
                <Typography className="product-title">{x.subText}</Typography>
                <Typography
                  sx={{ display: "flex" }}
                  className="product-subtitle"
                >
                  {x.price}{" "}
                  <Typography className="product-off">{x.off}</Typography>
                </Typography>
              </Link>
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
export default Category;
