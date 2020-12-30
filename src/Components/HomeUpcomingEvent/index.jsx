import React from "react";
import "../../scss/main.scss";
import pic1 from "../../Assets/img/post-22-570x492.jpg";
import pic2 from "../../Assets/img/post-23-570x492.jpg";
import { Container, Grid, Typography } from "@material-ui/core";
import EventItem from "../EventItem";

// chinh sua theme, response media query, to chuc thu muc, component phu

const HomeUpcomingEvent = () => {
  const eventData = [
    {
      pic: pic1,
      title:
        "US Conference for Online Marketers and Sales Managers in Los Angeles",
      date: "May 12, 2018",
    },
    {
      pic: pic2,
      title:
        "7th International New York Business Forum",
      date: "May 12, 2018",
    },
  ];

  return (
    <section className="home-upcoming-event">
      <Container fixed>
        <div className="home-upcoming-event__title">
          <div className="home-upcoming-event__line"></div>
          <h6>UPCOMING EVENTS</h6>
        </div>

        <Grid container spacing={2} justify="center">
          {console.log(eventData)}
          {eventData.map((item, key) => (
            <EventItem item={item} />
          ))}        
        </Grid>
      </Container>
    </section>
  );
};

export default HomeUpcomingEvent;
//
