import React, { Component } from "react";
import "../../scss/main.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
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
    slidesToScroll: 2,
    arrows: false,
    centerPadding: "15px",
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="about-our-history">
      <h3 className="page-title ">Our History</h3>
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
              <a href="#">Establishment of Business School</a>
              <div className="about-our-history__item__line"></div>

              <div className="about-our-history__item__dot"></div>

              <p className="about-our-history__item__detail__time ">
                <time datetime="2005">1999</time>
              </p>
            </h5>
          </div>
        </div>

        <div className="about-our-history__item">
          <div className="about-our-history__item__image">
            <img src={pic2} alt="pic2" />
            <div>
              <ZoomInIcon />
            </div>
          </div>
          <div className="about-our-history__item__detail">
            <h5>
              <a href="#">First Courses for Marketing Managers</a>
              <div className="about-our-history__item__line"></div>

              <div className="about-our-history__item__dot"></div>

              <p className="about-our-history__item__detail__time ">
                <time datetime="2005">2005</time>
              </p>
            </h5>
          </div>
        </div>

        <div className="about-our-history__item">
          <div className="about-our-history__item__image">
            <img src={pic3} alt="pic3" />
            <div>
              <ZoomInIcon />
            </div>
          </div>
          <div className="about-our-history__item__detail">
            <h5>
              <a href="#">Custom-made Corporate Programs</a>
              <div className="about-our-history__item__line"></div>

              <div className="about-our-history__item__dot"></div>

              <p className="about-our-history__item__detail__time ">
                <time datetime="2005">2010</time>
              </p>
            </h5>
          </div>
        </div>

        <div className="about-our-history__item">
          <div className="about-our-history__item__image">
            <img src={pic4} alt="pic4" />
            <div>
              <ZoomInIcon />
            </div>
          </div>
          <div className="about-our-history__item__detail">
            <h5>
              <a href="#">Introducing Courses for HR Managers</a>
              <div className="about-our-history__item__line"></div>

              <div className="about-our-history__item__dot"></div>

              <p className="about-our-history__item__detail__time ">
                <time datetime="2005">2013</time>
              </p>
            </h5>
          </div>
        </div>

        <div className="about-our-history__item">
          <div className="about-our-history__item__image">
            <img src={pic5} alt="pic5" />
            <div>
              <ZoomInIcon />
            </div>
          </div>
          <div className="about-our-history__item__detail">
            <h5>
              <a href="#">Getting International Recognition</a>
              <div className="about-our-history__item__line"></div>

              <div className="about-our-history__item__dot"></div>

              <p className="about-our-history__item__detail__time ">
                <time datetime="2005">2015</time>
              </p>
            </h5>
          </div>
        </div>

        <div className="about-our-history__item">
          <div className="about-our-history__item__image">
            <img src={pic6} alt="pic6" />
            <div>
              <ZoomInIcon />
            </div>
          </div>
          <div className="about-our-history__item__detail">
            <h5>
              <a href="#">Getting First Awards For Our School</a>
              <div className="about-our-history__item__line"></div>

              <div className="about-our-history__item__dot"></div>

              <p className="about-our-history__item__detail__time ">
                <time datetime="2005">2018</time>
              </p>
            </h5>
          </div>
        </div>
      </Slider>
    </section>
  );
};

export default AboutOurHistory;
