import React from "react";
import "../../scss1/main.scss";
import {
  Container,
  createMuiTheme,
  Grid,
  MuiThemeProvider,
} from "@material-ui/core";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 1280,
      xl: 1920,
    },
  },
});

const ContactUsGetInTouch = () => {
  return (
    <MuiThemeProvider theme={theme}>
      <section className="contact-us-get-in-touch">
        <Container>
          <div className="contact-us-get-in-touch__caption">
            <h3 className="page-title">Get in touch</h3>
            <p>
              If you have any questions, just fill in the contact form, and we
              will answer you shortly.
            </p>
          </div>

          <div className="contact-us-get-in-touch__form">
            <Grid
              container
              spacing={2}
              justify="flex-start"
              alignItems="center"
            >
              <Grid item xs={12} md={4} className="">
                <input type="text" placeholder="Your Name" required className="contact-us-get-in-touch__form__input"/>
              </Grid>

              <Grid item xs={12} md={4} className="">
                <input type="text" placeholder="E-mail" required className="contact-us-get-in-touch__form__input"/>
              </Grid>

              <Grid item xs={12} md={4} className="">
                <input type="text" placeholder="Phone" required className="contact-us-get-in-touch__form__input"/>
              </Grid>

              <textarea
                placeholder="Message"
                required
                rows="5"
                cols="100"
              ></textarea>

              <input type="submit" value="Send Message" className="contact-us-get-in-touch__form__button"/>
            </Grid>
          </div>
        </Container>
      </section>
    </MuiThemeProvider>
  );
};

export default ContactUsGetInTouch;
