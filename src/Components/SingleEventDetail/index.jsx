import React, { Component } from "react";
import "../../scss/main.scss";
import ScheduleIcon from "@material-ui/icons/Schedule";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import AppleIcon from "@material-ui/icons/Apple";
import FormatQuoteIcon from "@material-ui/icons/FormatQuote";
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import Pic1 from "../../Assets/img/post-1-770x430.jpg";
import { Container } from "@material-ui/core";

const SingleEventDetail = () => {
  return (
    <section className="single-event-detail">
      <Container>
        <h4>
          US Conference for Online Marketers and Sales Managers in Los Angeles
        </h4>

        <div className="single-event-detail__subtitle">
          <div className="single-event-detail__subtitle__badge">
            <a href="#">
              <LabelImportantIcon />
              EVENTS
            </a>
          </div>

          <div className="single-event-detail__subtitle__item">
            <ScheduleIcon /> <span>Nov 30, 2018</span>
          </div>

          <div className="single-event-detail__subtitle__item">
            <span>BY</span> <a href="#">GAVIN BELL</a>
          </div>
        </div>

        <p>
          Vestibulum faucibus venenatis consectetur. Nulla sit amet accumsan
          nibh, sed tincidunt neque. Quisque scelerisque justo eu dui
          sollicitudin, nec placerat ipsum efficitur. Quisque enim velit,
          efficitur vitae tellus ac, rhoncus feugiat sapien. Nullam posuere sit
          amet metus non egestas. Suspendisse ut augue ipsum. Fusce vitae orci
          congue, feugiat nisl a, tempor nulla.
        </p>

        <div className="single-event-detail__picture">
          <img src={Pic1} alt="pic1" />
        </div>

        <div className="single-event-detail__middle-text">
          <FormatQuoteIcon />
          <p>
            Integer eget neque sit amet purus rutrum porttitor at sed est. Etiam
            sed erat a odio tempus convallis eget in sapien. Donec nisi eget
            blandit.
          </p>
        </div>

        <p className="single-event-detail__lower-text">
          Morbi nec hendrerit nulla. In interdum ornare nibh vel iaculis. Nam
          ultricies egestas felis, tempus ultrices nunc ultrices non. Nullam
          sollicitudin volutpat magna, eu mattis ante mollis ut. Donec non erat
          ut nunc dictum hendrerit. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit.
        </p>

        <div className="single-event-detail__tag">
          <div className="single-event-detail__tag__left">
            <a href="#">events, </a>
            <a href="#">business, </a>
            <a href="#">conference</a>
          </div>

          <div className="single-event-detail__tag__right">
            <span>SHARE</span>
            <a href="#">
              <FacebookIcon />
            </a>
            <a href="#">
              <TwitterIcon />
            </a>
            <a href="#">
              <AppleIcon />
            </a>
            <a href="#">
              <InstagramIcon />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SingleEventDetail;
