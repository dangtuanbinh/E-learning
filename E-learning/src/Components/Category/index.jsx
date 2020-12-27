import { Box, Container, Typography } from "@material-ui/core";
import React from "react";
import { Col, Row } from "reactstrap";
import "./index.scss";
import ArrowLeftOutlinedIcon from "@material-ui/icons/ArrowLeftOutlined";

const ProductCategory = () => {
  return (
    <>
      <Box className="category" id="category">
        <Container>
          <Box textAlign="center" className="category__headline">
            <Box className="category__line"></Box>
            <h3>POPULAR CATEGORIES</h3>
            <Box className="category__line"></Box>
          </Box>
          <Row>
            
            <Col lg="8" className="category__item">
              <a href="#">
                <Box className="category__image category__image--1"></Box>
              </a>
              <Box className="category__text">
                <Typography>
                  <span>Front-end Developer</span>
                </Typography>
                <Box className="category__icon__container">
                  <div className="category__text__line"></div>
                  <ArrowLeftOutlinedIcon className="category__icon" />
                </Box>
              </Box>
            </Col>

            <Col lg="4" className="category__item">
              <a href="">
                <Box className="category__image category__image--3"></Box>
              </a>
              <Box className="category__text">
                <Typography>
                  <span>Algorithms</span>
                </Typography>
                <Box className="category__icon__container">
                  <div className="category__text__line"></div>
                  <ArrowLeftOutlinedIcon className="category__icon" />
                </Box>
              </Box>
            </Col>
          </Row>

          <Row>
            <Col lg="4" className="category__item">
              <a href="#">
                <Box className="category__image category__image--4"></Box>
              </a>
              <Box className="category__text">
                <Typography>
                  <span>Data Structure</span>
                </Typography>
                <Box className="category__icon__container">
                  <div className="category__text__line"></div>
                  <ArrowLeftOutlinedIcon className="category__icon" />
                </Box>
              </Box>
            </Col>

            <Col lg="8" className="category__item">
              <a href="#">
                <Box className="category__image category__image--2"></Box>
              </a>
              <Box className="category__text">
                <Typography>
                  <span>Back-end Developer</span>
                </Typography>
                <Box className="category__icon__container">
                  <div className="category__text__line"></div>
                  <ArrowLeftOutlinedIcon className="category__icon" />
                </Box>
              </Box>
            </Col>
          </Row>
        </Container>
      </Box>
    </>
  );
};
export default ProductCategory;
