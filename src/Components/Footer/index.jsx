<<<<<<< HEAD
import React, { Component } from "react";
import "../../scss/main.scss";
import logo from "../../Assets/img/logo-inverse-162x51.png";
=======
import { Container, Grid, Typography } from "@material-ui/core";
import React from "react";
import style from "./style";
>>>>>>> updateSearchApi
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
import { Container, Grid, Typography } from "@material-ui/core";
// import {ImgZoom} from 'my-imgzoom';
// import imgzoom from 'imgzoom';
// import InnerImageZoom from 'react-inner-image-zoom';
 
// new ImgZoom({
//     smallc:'.smallc'
// });

// window.addEventListener('load', function() {
//   var img = document.querySelectorAll('img')
//   for (var i=0; i<img.length; i++) {
//       img[i].addEventListener('click', imgzoom)
//   }
// })

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__top">
        <Container>
          <div className="footer__top__content">
            <Grid container spacing={2} justify="space-between">
              <Grid
                item
                sm={6}
                lg={4}
                xl={3}
                className="footer__top__content__left"
              >
                <img src={logo} alt="logo" />
                <p>
                  Providing professional online business education for students
                  from all over the world since 1999.{" "}
                </p>
                <div className="footer__top__content__left__bottom">
                  <ul style={{ listStyleType: "none" }}>
                    <li>
                      <div className="footer__top__content__left__bottom__contact">
                        <PhoneIcon className="footer__top__content__left__bottom__contact__icon" />
                        <a href="#">
                          <span>+1 323-913-4688</span>{" "}
                        </a>
                      </div>
                    </li>

                    <li>
                      <div className="footer__top__content__left__bottom__contact">
                        <ClockIcon className="footer__top__content__left__bottom__contact__icon" />
                        <p>Mon-Sat: 07:00AM - 05:00PM</p>{" "}
                      </div>
                    </li>

                    <li>
                      <div className="footer__top__content__left__bottom__contact">
                        <LocationOnIcon className="footer__top__content__left__bottom__contact__icon" />
                        <a href="#">
                          <span>
                            4730 Crystal Springs Dr, Los Angeles, CA 90027
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
                className="footer__top__content__center"
              >
                <h5>Newsletter </h5>
                <p>Join Our Email List for Tips and Useful Information</p>
                <input type="text" placeholder="Enter Your E-mail" />

                <button>Subscribe</button>
                <div className="footer__top__content__center__social">
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

              <Grid
                item
                xs={12}
                lg={3}
                xl={3}
                className="footer__top__content__right"
              >
                <h5>Gallery</h5>
                <div className="footer__top__content__right__wrapper">
                  <Grid container spacing={2} justify="center">
                    <Grid item md={3} lg={6}>
                      <div className="footer__top__content__right__wrapper__item">
                        <img src={pic1} alt="pic1" />
                        <div>
                          <ZoomInIcon />
                        </div>
                      </div>
                    </Grid>

                    <Grid item md={3} lg={6}>
                      <div className="footer__top__content__right__wrapper__item">
                        <img src={pic2} alt="pic2" />
                        <div>
                          <ZoomInIcon />
                        </div>
                      </div>
                    </Grid>

                    <Grid item md={3} lg={6}>
                      <div className="footer__top__content__right__wrapper__item">
                        <img src={pic3} alt="pic3" />
                        <div>
                          <ZoomInIcon />
                        </div>
                      </div>
                    </Grid>

                    <Grid item md={3} lg={6}>
                      <div className="footer__top__content__right__wrapper__item">
                        <img src={pic4} alt="pic4" />
                        <div>
                          <ZoomInIcon />
                        </div>
                      </div>
                    </Grid>
                  </Grid>
                </div>
              </Grid>
            </Grid>
          </div>
        </Container>
      </div>

      <div className="footer__bottom">
        <Container>
          <div className="footer__bottom__content">
            <Typography>
              © 2020 Business School. All rights reserved{" "}
            </Typography>
            <Typography>Privacy Policy</Typography>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
