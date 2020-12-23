import React from "react";
import "../../scss1/main.scss";
import { Container, Grid } from "@material-ui/core";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Box from "@material-ui/core/Box";
import pic1 from "../../Assets/img/project-1-420x308.jpg";
import pic2 from "../../Assets/img/project-2-420x308.jpg";
import pic3 from "../../Assets/img/project-3-420x308.jpg";
import pic4 from "../../Assets/img/project-4-420x308.jpg";
import pic5 from "../../Assets/img/project-5-420x308.jpg";
import pic6 from "../../Assets/img/project-6-420x308.jpg";
import ZoomInIcon from "@material-ui/icons/ZoomIn";

const AboutOurHistory = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="about-our-history">
      {/* <Container> */}
      <h3 className="page-title">Our History</h3>
      {/* <Box> */}
      <Slider {...settings}>
        <div className="about-our-history__item">
          <div className="about-our-history__item__image">
            <img src={pic1} alt="pic1" />
            <div>
              <ZoomInIcon />
            </div>
          </div>
          <div className="about-our-history__item__detail">
            <h5>
              <a href="#">First Courses for Marketing Managers</a>
              <hr />
              <time datetime="2005">2005</time>
            </h5>
          </div>
        </div>

        <div>
          <h5>
            <a href="#">First Courses for Marketing Managers</a>
          </h5>
          <hr />
          <p>1999</p>
        </div>

        <div>
          <h3>3</h3>
        </div>
        <div>
          <h3>4</h3>
        </div>
        <div>
          <h3>5</h3>
        </div>
        <div>
          <h3>6</h3>
        </div>
      </Slider>
      {/* </Box> */}
      {/* </Container> */}
    </section>
  );
};

export default AboutOurHistory;
