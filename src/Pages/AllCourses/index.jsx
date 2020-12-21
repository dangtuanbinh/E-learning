import { Box } from "@material-ui/core";
import React, { useState } from "react";
import Header from "../../Components/Header/index";
import PageBanner from "../../Components/PageBanner/index";
import Footer from "../../Components/Footer/index";
import PreloadingPage from "../../Components/PreloadingPage/index";
import AllCourseItem from "../../Components/AllCourseItem/index";
import "./index.scss";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getListCourse } from "../../Action/courseAction";
import { Container, Row } from "reactstrap";

const AllCourses = () => {
  // Courses
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

    return courseList.map((course, index) => {
      return <AllCourseItem course={course} key={index} />;
    });
  };
  // End of courses
  // Preloading page
  const [loadingPage, setLoadingPage] = useState(true);
  setTimeout(() => {
    setLoadingPage(false);
  }, 1200);
  // End of preloading page
  return (
    <>
      {loadingPage ? (
        <PreloadingPage />
      ) : (
        <>
          <Header />
          <PageBanner />
          <Container>
            <Box className="allCourse">
              <Box textAlign="center" className="allCourse__headline">
                <Box className="allCourse__line"></Box>
                <h3>ALL COURSES</h3>
                <Box className="allCourse__line"></Box>
              </Box>
              <Row>{renderCourseList()}</Row>
            </Box>
          </Container>
          <Footer />
        </>
      )}
    </>
  );
};
export default AllCourses;
