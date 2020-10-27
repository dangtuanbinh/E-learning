import { Container } from "@material-ui/core";
import React from "react";
import style from "./style";

export default function index() {
  const classes = style();
  return (
    <section className={classes.BottomBanner}>
      <Container>
        <div className={classes.BottomBannerWrapper}>
          <h3>Programs for Executives</h3>
          <p>
            Our business school provides consistent education for business
            owners and executives. The topics include marketing, management, and
            strategic thinking.
          </p>
          <button>Select Your program</button>
        </div>
      </Container>
    </section>
  );
}
