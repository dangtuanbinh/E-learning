import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import style from "./style";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import AppleIcon from "@material-ui/icons/Apple";
import PhoneIcon from "@material-ui/icons/Phone";
import ClockIcon from "@material-ui/icons/QueryBuilder";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import pic1 from "../../Assets/img/gallery-image-10-128x120.jpg";
import pic2 from "../../Assets/img/gallery-image-11-128x120.jpg";
import pic3 from "../../Assets/img/gallery-image-12-128x120.jpg";
import pic4 from "../../Assets/img/gallery-image-13-128x120.jpg";
import ZoomInIcon from "@material-ui/icons/ZoomIn";

export default function index() {
  const classes = style();
  return (
    <footer className={classes.footer}>
      <div className={classes.top}>
        <Container>
          <div className={classes.topContent}>
            <Grid container spacing={2} justify="space-between">
              <Grid
                item
                sm={6}
                lg={4}
                xl={3}
                className={classes.topContentLeft}
              >
    
                <p>
                  Providing professional online Information Technology education for students
                  from all over the world since 2019.{" "}
                </p>
                <div className={classes.topContentLeftBottom}>
                  <ul style={{ listStyleType: "none" }}>
                    <li>
                      <div className={classes.topContentLeftBottomContact}>
                        <PhoneIcon className={classes.icon} />
                        <a href="#">
                          <span>+84 34 810 7118</span>{" "}
                        </a>
                      </div>
                    </li>

                    <li>
                      <div className={classes.topContentLeftBottomContact}>
                        <ClockIcon className={classes.icon} />
                        <p>Mon-Sat: 07:00AM - 05:00PM</p>{" "}
                      </div>
                    </li>

                    <li>
                      <div className={classes.topContentLeftBottomContact}>
                        <LocationOnIcon className={classes.icon} />
                        <a href="#">
                          <span>
                            1/6 Son Ky Street, Ward Son Ky, Tan Phu District, Ho Chi Minh city, Viet Nam
                          </span>
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </Grid>

              <Grid
                item
                sm={6}
                lg={4}
                xl={4}
                className={classes.topContentCenter}
              >
                <h5>Newsletter </h5>
                <p>Join Our Email List for Tips and Useful Information</p>
                <input type="text" placeholder="Enter Your E-mail" />

                <button>Subscribe</button>
                <div className={classes.social}>
                  <Typography>Follow Us</Typography>
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
              </Grid>

              <Grid item xs={12} lg={3} xl={3} className={classes.topContentRight}>
                <h5>Gallery</h5>
                <Grid container spacing={2} justify="center">
                  <Grid item md={3} lg={6}>
                    <div className={classes.topContentRightWrapper}>
                      <img src={pic1} alt="pic1" />
                      <div><ZoomInIcon/></div>
                    </div>
                  </Grid>

                  <Grid item md={3} lg={6}>
                    <div className={classes.topContentRightWrapper}>
                      <img src={pic2} alt="pic2" />
                      <div><ZoomInIcon/></div>
                    </div>
                  </Grid>

                  <Grid item md={3} lg={6}>
                    <div className={classes.topContentRightWrapper}>
                      <img src={pic3} alt="pic3" />
                      <div><ZoomInIcon/></div>
                    </div>
                  </Grid>

                  <Grid item md={3} lg={6}>
                    <div className={classes.topContentRightWrapper}>
                      <img src={pic4} alt="pic4" />
                      <div><ZoomInIcon/></div>
                    </div>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>

      <div className={classes.bottom}>
        <Container>
          <div className={classes.bottomContent}>
            <Typography>
              © 2020 Business School. All rights reserved{" "}
            </Typography>
            <Typography>Privacy Policy</Typography>
          </div>
        </Container>
      </div>
    </footer>
  );
}
