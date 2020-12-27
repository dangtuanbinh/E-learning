import { Box } from "@material-ui/core";
import React from "react";
import { Carousel } from "react-bootstrap";
import LearnMoreButton from "../../Components/LearnMoreButton/index";
import GetInTouchButton from "../../Components/GetInTouchButton/index";
import { withRouter } from "react-router-dom";
import "./index.scss";

const Slider = () => {
  return (
    <>
      <Carousel className="carousel">
        <Carousel.Item className="carousel__item carousel__item--1">
          <Carousel.Caption className="carousel__caption carousel__caption--1">
            <h1>
              Most suitable online <br /> coding course for you
            </h1>
            <p>
              Online platform thats provide new or pro players in <br />
              Information Technology with most effective online courses
            </p>
            <Box className="carousel__button--1">
              <LearnMoreButton />
            </Box>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="carousel__item carousel__item--2">
          <Carousel.Caption className="carousel__caption carousel__caption--2">
            <h1>
              Acquiring realistic <br /> knowledge projects
            </h1>
            <p>
              Being through various projects that apply new
              <br /> and common framework and libraries in coding.
            </p>
            <Box className="carousel__button--2">
              <GetInTouchButton />
            </Box>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default withRouter(Slider);
