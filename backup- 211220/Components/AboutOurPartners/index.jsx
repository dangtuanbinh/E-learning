import React from "react";
import "../../scss1/main.scss";
import client1 from "../../Assets/img/clients-1-270x145.png";
import client2 from "../../Assets/img/clients-2-270x145.png";
import client4 from "../../Assets/img/clients-4-270x145.png";
import client5 from "../../Assets/img/clients-5-270x145.png";
import client6 from "../../Assets/img/clients-6-270x145.png";
import client7 from "../../Assets/img/clients-7-270x145.png";
import client8 from "../../Assets/img/clients-8-270x145.png";
import { Container, Grid } from "@material-ui/core";

const AboutOurPartners = () => {

  return (
    <section className="about-our-partners">
      <h3 className="page-title">Our Partners</h3>
      <Container>
        <Grid container spacing={2} justify="flex-start" alignItems="center">
          <Grid item sm={6} md={4} lg={3} className="">
            <a href="#">
              <img src={client1}></img>
            </a>
          </Grid>

          <Grid item sm={6} md={4} lg={3} className="">
            <a href="#">
              <img src={client2}></img>
            </a>
          </Grid>

          <Grid item sm={6} md={4} lg={3} className="">
            <a href="#">
              <img src={client4}></img>
            </a>
          </Grid>

          <Grid item sm={6} md={4} lg={3} className="">
            <a href="#">
              <img src={client5}></img>
            </a>
          </Grid>

          <Grid item sm={6} md={4} lg={3} className="">
            <a href="#">
              <img src={client5}></img>
            </a>
          </Grid>

          <Grid item sm={6} md={4} lg={3} className="">
            <a href="#">
              <img src={client6}></img>
            </a>
          </Grid>

          <Grid item sm={6} md={4} lg={3} className="">
            <a href="#">
              <img src={client7}></img>
            </a>
          </Grid>

          <Grid item sm={6} md={4} lg={3} className="">
            <a href="#">
              <img src={client8}></img>
            </a>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default AboutOurPartners;
