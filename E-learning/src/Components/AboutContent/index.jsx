import { AppBar, Box, Tab, Tabs, Typography } from "@material-ui/core";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import image from "../../Assets/img/about-image.jpg";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import AdjustOutlinedIcon from "@material-ui/icons/AdjustOutlined";
import GetInTouchButton from "../../Components/GetInTouchButton/index";
import LearnMoreButton from "../../Components/LearnMoreButton/index";
import "./index.scss";

// Material UI Tabs Set up
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}
// End of Material UI Tabs Setup

const AboutContent = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <>
      <Box className="aboutContent">
        <Container>
          <Row>
            <Col lg="6">
              <img src={image} alt="about-image" />
            </Col>

            <Col className="aboutContent__right" lg="6">
              <h1>Why Us</h1>
              <Box className="aboutContent__tab">
                <AppBar position="static">
                  <Tabs
                    value={value}
                    onChange={handleChange}
                    className="aboutContent__tabIndicator"
                    aria-label="full width tabs example"
                  >
                    <Tab
                      className="aboutContent__tabItem"
                      label="Experience"
                      {...a11yProps(0)}
                    />
                    <Tab
                      className="aboutContent__tabItem"
                      label="Vision"
                      {...a11yProps(1)}
                    />
                    <Tab
                      className="aboutContent__tabItem"
                      label="Missions"
                      {...a11yProps(2)}
                    />
                  </Tabs>
                </AppBar>
                <SwipeableViews index={value} onChangeIndex={handleChangeIndex}>
                  <TabPanel value={value} index={0}>
                    <Box className="aboutContent__item">
                      <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing
                        elit. Nam, tempore ut? Alias, praesentium error sequi
                        blanditiis nemo rem inventore eum culpa suscipit odit
                        repudiandae totam! Nam laudantium, excepturi fugiat
                        recusandae quidem, et voluptas perspiciatis voluptatum
                        praesentium, corrupti eveniet ullam assumenda magni
                        quasi.
                      </p>
                      {/* Experience indicator */}
                      <Box className="aboutContent__item__slide">
                        <Box className="aboutContent__item__content">
                          <h2>Frontend</h2>
                          <div className="aboutContent__item__icon">
                            <AdjustOutlinedIcon className="aboutContent__icon" />
                          </div>
                        </Box>

                        <Box className="aboutContent__item__content">
                          <h2>Backend</h2>
                          <div className="aboutContent__item__icon">
                            <Box className="aboutContent__icon">
                              <AdjustOutlinedIcon />
                            </Box>
                          </div>
                        </Box>

                        <Box className="aboutContent__item__content">
                          <h2>Algorithm and Datastructure</h2>
                          <div className="aboutContent__item__icon">
                            <AdjustOutlinedIcon className="aboutContent__icon" />
                          </div>
                        </Box>
                      </Box>
                    </Box>
                  </TabPanel>
                  <TabPanel value={value} index={1}>
                    <Box className="aboutContent__item">
                      <Box>
                        <h1>ljasldjsalkdjsad</h1>
                      </Box>

                      <Box className="aboutContent__button">
                        <Box className="aboutContent__button__container">
                          <GetInTouchButton />
                          <LearnMoreButton />
                        </Box>
                      </Box>
                    </Box>
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                  <Box className="aboutContent__item">
                      <Box>
                        <h1>ljasldjsalkdjsad</h1>
                      </Box>

                      <Box className="aboutContent__button">
                        <Box className="aboutContent__button__container">
                          <GetInTouchButton />
                          <LearnMoreButton />
                        </Box>
                      </Box>
                    </Box>
                  </TabPanel>
                </SwipeableViews>
              </Box>
            </Col>
          </Row>
        </Container>
      </Box>
    </>
  );
};
export default AboutContent;
