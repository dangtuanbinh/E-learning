import { Box } from "@material-ui/core";
import React from "react";
import { Row, Container } from "reactstrap";
import CourseItem from "../CourseItem/index";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getListCourse } from "../../Action/courseAction";

const Course = () => {
  const dispatch = useDispatch();
  // getCourseList() will run when the component fist rendered to get courselist
  useEffect(() => {
    dispatch(getListCourse());
  }, [dispatch]);
  // Get courseList from store
  const courseList = useSelector((state) => {
    return state.course.courseList;
  });

  const renderCourseList = () => {
    if (!courseList) return null;
    let newCourseList =courseList.slice(2,8)
    return newCourseList.map((course, index) => {
      return <CourseItem course={course} key={index} />;
    });
  };
  return (
    <>
      <Container id="course">
        <Box className="course">
          <Box textAlign="center" className="course__headline">
            <Box className="course__line"></Box>
            <h3>POPULAR COURSES</h3>
            <Box className="course__line"></Box>
          </Box>
          <Row>{renderCourseList()}</Row>
        </Box>
      </Container>
    </>
  );
};
export default Course;
