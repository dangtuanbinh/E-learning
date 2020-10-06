import { Box,} from "@material-ui/core";
import React from "react";
import { Row, Container  } from "reactstrap";
import CourseItem from "../CourseItem/index";
import "./index.scss";

const Course = () => {
  return (
    <>
      <Container id="course">
        <Box className="course">
          <Box textAlign="center" className="course__headline">
            <Box className="course__line"></Box>
            <h3>POPULAR COURSES</h3>
            <Box className="course__line"></Box>
          </Box>
          <Row>
            <CourseItem />
            <CourseItem />
            <CourseItem />
            <CourseItem />
            <CourseItem />
            <CourseItem /> 
          </Row>
        </Box>
      </Container>
    </>
  );
};
export default Course;
