import React from "react";
import "../../Scss/main.scss";
import { Container } from "@material-ui/core";

const HomeBottomBanner = () => {

  return (
    <section className="bottom-banner">
      <Container>
        <div className="bottom-banner__wrapper">
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

export default HomeBottomBanner;

