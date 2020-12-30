import { Container, Grid } from "@material-ui/core";
import React from "react";
import style from "./style";
import pic1 from "../../Assets/img/post-22-570x492.jpg";
import pic2 from "../../Assets/img/post-23-570x492.jpg";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import AppleIcon from "@material-ui/icons/Apple";

// chinh sua theme, response media query, to chuc thu muc, component phu

export default function index() {
  const classes = style();
  return (
    <section className={classes.UpcomingEvent}>
        <Container fixed>
          <div className={classes.title}>
          <div className={classes.line}></div>
          <h6 div className={classes.h6title}>UPCOMING EVENTS</h6>
          </div>

          <Grid container spacing={2} justify="center">
            <Grid item sm={6} xs={12}>
              <article className={classes.wrapper}>
                <a href="#">
                  <img src={pic1} alt="pic1" />
                </a>
                <div className={classes.content}>
                  <h4>
                    US Conference for Online Marketers and Sales Managers in Los
                    Angeles
                  </h4>
                  <p>May 12, 2018</p>
                  <div className={classes.social}>
                    <a href="#">
                      <FacebookIcon />
                    </a>
                    <a href="#">
                      <TwitterIcon />
                    </a>
                    <a href="#">
                      <InstagramIcon />
                    </a>
                    <a href="#">
                      <AppleIcon />
                    </a>
                  </div>
                </div>
              </article>
            </Grid>

            <Grid item sm={6} xs={12}>
              <article className={classes.wrapper}>
                <a href="#">
                  <img src={pic2} alt="pic2" />
                </a>
                <div className={classes.content}>
                  <h4>7th International New York Business Forum</h4>
                  <p>May 12, 2018</p>
                  <div className={classes.social}>
                    <a href="#">
                      <FacebookIcon />
                    </a>
                    <a href="#">
                      <TwitterIcon />
                    </a>
                    <a href="#">
                      <InstagramIcon />
                    </a>
                    <a href="#">
                      <AppleIcon />
                    </a>
                  </div>
                </div>
              </article>
            </Grid>
          </Grid>
        </Container>
    </section>
  );
}
//
