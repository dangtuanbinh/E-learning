import React, { Component } from "react";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import HomeIcon from "@material-ui/icons/Home";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import "../../scss/main.scss";
import { Container, Grid } from "@material-ui/core";

const ContactContactDetail = () => {
  return (
    <section className="contact-contact-detail">
      <Container>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          spacing={3}
        >
          <Grid item xs={12} md={6} lg={4} className="">
            <div className="contact-contact-detail__item">
              <PhoneIphoneIcon />
              <div className="contact-contact-detail__item__line"></div>
              <a href="#">
                <p>+1 323-913-4688</p>
              </a>
              <a href="#">
                <p>+1 323-888-4554</p>
              </a>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4} className="">
            <div className="contact-contact-detail__item">
              <HomeIcon />
              <div className="contact-contact-detail__item__line"></div>
              <a href="#">
                <p>4730 Crystal Springs Dr,</p>
              </a>
              <a href="#">
                <p>Los Angeles, CA 90027</p>
              </a>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4} className="">
            <div className="contact-contact-detail__item">
              <QuestionAnswerIcon />
              <div className="contact-contact-detail__item__line"></div>
              <a href="#">
                <p>mail@demolink.org</p>
              </a>
              <a href="#">
                <p>info@demolink.org</p>
              </a>
            </div>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default ContactContactDetail;
