import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getDetailCourse } from "../../Redux/Actions/detailCourseAction";
import { withRouter } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

import "./index.scss";

import "./index.scss";
import { Box } from "@material-ui/core";

const DetailCourseItem = (props) => {
  // Get detail list course
  const dispatch = useDispatch();

  const detailList = useSelector((state) => {
    return state.detailList.detailList;
  });

  const {
    maKhoaHoc,
    tenKhoaHoc,
    moTa,
    luotXem,
    hinhAnh,
    ngayTao,
    soLuongHocVien,
  } = detailList;
  useEffect(() => {
    const courseID = props.match.params.id;
    dispatch(getDetailCourse(courseID));
  }, []);
  // End of get detail list course

  return (
    <>
      <Box className="detailCourse">
        <Container>
          <Row>
            <Col xs="12" sm="5" lg="5">
              <Box className="detailCourse__image">
                <img src={hinhAnh} alt="course image" />
              </Box>

              <Box className="detailCourse__info">
                <p>View: {luotXem}</p>
                <p>Number of studen: {soLuongHocVien}</p>
              </Box>
            </Col>

            <Col xs="12" sm="7" lg="7">
                <Box className="detailCourse__title">
                    <h2>{tenKhoaHoc}</h2>
                    <p>Date of published: {ngayTao}</p>
                </Box>

                <Box className="detailCourse__detail">
                    <p>Course code: {maKhoaHoc}</p>
                </Box>
            </Col>
          </Row>

          <Box className="detailCourse__des">
            <h3>Description</h3>
            <p>{moTa}</p>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default withRouter(DetailCourseItem);
