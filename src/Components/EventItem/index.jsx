import React from "react";
import "../../scss/main.scss";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
import AppleIcon from "@material-ui/icons/Apple";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";

const EventItem = (props) => {
  return (
    <Grid item sm={6} xs={12}>
      <article className="home-upcoming-event__wrapper">
        <Link to="/single-event">
          <img src={props.item.pic} alt="pic1" />
        </Link>
        <div className="home-upcoming-event__wrapper__content">
          <Link to="/single-event">
            <h4>{props.item.title}</h4>
          </Link>
          <p>{props.item.date}</p>
          <div className="home-upcoming-event__wrapper__social">
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
  );
};

export default EventItem;
