import React, { Component } from "react";
import { connect } from "react-redux";
import { createAction } from "../../Redux/Actions";
import { courseService } from "../../Services";
import {
  FETCH_COURSE_CATEGORIES_DETAIL,
  CLEAR_COURSE_CATEGORIES_DETAIL,
} from "../../Redux/Actions/type";
import CourseItem from "../../Components/CourseItem";

class CourseCategoriesItemDetail extends Component {
  render() {
    return (
      <div>
        <div className="container">
              <h1 className="display-4 text-left">
                Các khóa học có mã danh mục "
                {this.props.match.params.courseCategoriesId}" là:
                <div id="no-result"></div>
                <div className="row">
                  {this.props.courseCategoriesItemDetail.map((item, index) => (
                    <div className="col-3">
                      <CourseItem item={item} />
                    </div>
                  ))}
                </div>
              </h1>
        </div>
      </div>
    );
  }

  componentDidMount() {
    courseService
      .fetchCourseCategoriesDetail(this.props.match.params.courseCategoriesId)
      .then((res) => {
        this.props.dispatch(
          createAction(FETCH_COURSE_CATEGORIES_DETAIL, res.data)
        );
      })
      .catch((err) => {
        this.props.dispatch(
          createAction(CLEAR_COURSE_CATEGORIES_DETAIL, err)
        );
        document.getElementById("no-result").innerHTML="Không tìm thấy kết quả"
      });
  }
}

const mapStatetoProps = (state) => ({
  courseCategoriesItemDetail: state.course.courseCategoriesItemDetail || {
    maKhoaHoc: "",
    tenKhoaHoc: "",
    nguoiTao: {
      taiKhoan: "",
      hoTen: "",
    },
    danhMucKhoaHoc: {
      maDanhMucKhoahoc: "",
      tenDanhMucKhoaHoc: "",
    },
  },
});

export default connect(mapStatetoProps)(CourseCategoriesItemDetail);
