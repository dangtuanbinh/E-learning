import React, { Component } from "react";
import { connect } from "react-redux";
import { createAction } from "../../Redux/Actions";
import {
  CLEAR_COURSE_CATEGORIES_DETAIL,
  FETCH_COURSE_STUDENTS,
} from "../../Redux/Actions/type";
import { courseService, userService } from "../../Services";

class CourseStudents extends Component {
  render() {
    return (
      <div>
        DANH SÁCH HỌC VIÊN:
        {this.props.StudentList.map((item, index) => (
          <div className="card col-3">
            <p>{item.hoTen}</p>
            <br />
            <button
              className="btn btn-success"
              onClick={() => this._handleRegister(item.taiKhoan)}
            >
              Đăng ký
            </button>
            <br />
            <button
              className="btn btn-success"
              onClick={() => this._handleConfirmRegistration(item.taiKhoan)}
            >
              Ghi danh
            </button>
            <br />
            <button
              className="btn btn-success"
              onClick={() => this._handleCancelRegistration(item.taiKhoan)}
            >
              Hủy ghi danh
            </button>
          </div>
        ))}
      </div>
    );
  }

  _handleConfirmRegistration = (userName) => {
    userService
      .confirmRegistration(
        {
          maKhoaHoc: this.props.match.params.listId,
          taiKhoan: userName,
        },
        this.props.accessToken
      )
      .then((res) => {
        console.log(res);
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  _handleRegister = (userName) => {
    userService
      .registerCourse(
        {
          maKhoaHoc: this.props.match.params.listId,
          taiKhoan: userName,
        },
        this.props.accessToken
      )
      .then((res) => {
        console.log(res);
        alert("Học viên đăng ký thành công!")
      })
      .catch((err) => {
        console.log(err);
      });
  };

  _handleCancelRegistration = (userName) => {
    userService
      .cancelRegistration(
        {
          maKhoaHoc: this.props.match.params.listId,
          taiKhoan: userName,
        },
        this.props.accessToken
      )
      .then((res) => {
        console.log(res);
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  _getAccessToken = () => {
    return JSON.parse(localStorage.getItem("accessToken"));
  };

  _;

  componentDidMount() {
    const accessToken = this._getAccessToken();
    courseService
      .fetchCourseStudents(this.props.match.params.listId, accessToken)
      .then((res) => {
        this.props.dispatch(
          createAction(FETCH_COURSE_STUDENTS, res.data.lstHocVien)
        );
      })
      .catch((err) => {
        console.log(err);
        this.props.dispatch(createAction(CLEAR_COURSE_CATEGORIES_DETAIL, err));
      });
  }
}

const mapStateToProps = (state) => ({
  StudentList: state.course.courseStudents || {
    taiKhoan: "",
    hoTen: "",
  },
  accessToken: state.user.accessToken,
});

export default connect(mapStateToProps)(CourseStudents);
