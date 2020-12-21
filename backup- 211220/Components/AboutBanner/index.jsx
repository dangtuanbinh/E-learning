import React from "react";
import "../../scss1/main.scss";
import { Container, Grid } from "@material-ui/core";

const AboutBanner = () => {

  return (
    <section className="about-banner">
      <Container>
        <Grid container spacing={2} justify="center" alignItems="center">
          <Grid item xs={12} sm={5} lg={3} className="about-banner__item">
            <p>12</p>
            <h5>new courses</h5>
          </Grid>

          <Grid item xs={12} sm={5} lg={3} className="about-banner__item">
            <p>194</p>
            <h5>partners</h5>
          </Grid>

          <Grid item xs={12} sm={5} lg={3} className="about-banner__item">
            <p>5K</p>
            <h5>annual students</h5>
          </Grid>

          <Grid item xs={12} sm={5} lg={3} className="about-banner__item">
            <p>25</p>
            <h5>teachers</h5>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default AboutBanner;
