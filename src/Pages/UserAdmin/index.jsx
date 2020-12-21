import React, { Component } from "react";
import { userService } from "../../Services";
import { connect } from "react-redux";
import { createAction } from "../../Redux/Actions";
import {
  FETCH_PENDING_COURSES,
  FETCH_UNREGISTERED_COURSES,
  FETCH_APPROVED_COURSES,
  FETCH_UNREGISTERED_STUDENTS,
  FETCH_PENDING_STUDENTS,
  FETCH_APPROVED_STUDENTS,
  FETCH_COURSE_ID,
  FETCH_USER_INFO,
  FETCH_USER_LIST,
  FETCH_USER_DETAIL,
} from "../../Redux/Actions/type";
import { Formik, Form, Field, ErrorMessage } from "formik";
import CourseItem from "../../Components/CourseItem";
import { fetchCourses } from "../../Redux/Actions/course";
import { Link } from "react-router-dom";
import { signupUserSchema } from "../../Services/user";

class UserAdmin extends Component {
  _handleAddUser = (values) => {
    userService
      .addUser(values, this.props.accessToken)
      .then((res) => {
        console.log(res.data);
        alert("Đã thêm tài khoản thành công");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  _handleSearch = (searchKey) => {
    console.log(searchKey.searchKey);
    userService
      .searchUser(searchKey.searchKey)
      .then((res) => {
        this.props.dispatch(createAction(FETCH_USER_LIST, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  _getUserName = () => {
    const userName = JSON.parse(localStorage.getItem("credentials"));
    return userName.taiKhoan;
  };

  _getUserDetail = () => {
    // const accessToken = this._getAccessToken();
    userService
      .fetchUserDetail(this.props.accessToken)
      .then((res) => {
        this.props.dispatch(createAction(FETCH_USER_DETAIL, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  _getUnregisteredCourses = () => {
    const userName = this._getUserName();
    userService
      .fetchUnregistedCourses(userName, this.props.accessToken)
      .then((res) => {
        console.log(res);
        this.props.dispatch(createAction(FETCH_UNREGISTERED_COURSES, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  _getPendingCourses = () => {
    const userName = this._getUserName();
    userService
      .fetchPendingCourses(userName, this.props.accessToken)
      .then((res) => {
        this.props.dispatch(createAction(FETCH_PENDING_COURSES, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  _getApprovedCourses = () => {
    const userName = this._getUserName();
    userService
      .fetchApprovedCourses(userName, this.props.accessToken)
      .then((res) => {
        this.props.dispatch(createAction(FETCH_APPROVED_COURSES, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  _handleSubmit = (values) => {
    console.log(values);
    return this.props.dispatch(createAction(FETCH_COURSE_ID, values));
  };

  _getUnregisteredStudents = () => {
    userService
      .fetchUnregisteredStudents(
        this.props.courseID.maKhoaHoc,
        this.props.accessToken
      )
      .then((res) => {
        this.props.dispatch(
          createAction(FETCH_UNREGISTERED_STUDENTS, res.data)
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
  _getPendingStudents = () => {
    userService
      .fetchPendingStudents(
        this.props.courseID.maKhoaHoc,
        this.props.accessToken
      )
      .then((res) => {
        this.props.dispatch(createAction(FETCH_PENDING_STUDENTS, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  _getApprovedStudents = () => {
    userService
      .fetchApprovedStudents(
        this.props.courseID.maKhoaHoc,
        this.props.accessToken
      )
      .then((res) => {
        this.props.dispatch(createAction(FETCH_APPROVED_STUDENTS, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  _handleUpdateUserDetail = (values) => {
    userService
      .updateUserDetail(values, this.props.accessToken)
      .then((res) => {
        alert("Cập nhập thông tin tài khoản thành công!");
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  _handleShowUserInfo = () => {
    userService
      .fetchUserInfo({taiKhoan: this.props.credentials.taiKhoan}, this.props.accessToken)
      .then((res) => {
        console.log(res.data);
        this.props.dispatch(createAction(FETCH_USER_INFO, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Xem Thông Tin Tài Khoản</h1>
        <button onClick={() => this._handleShowUserInfo()}>Hiển Thị</button>

        <h1 className="text-center">Cập Nhập Thông Tin Người Dùng</h1>
        <Formik
          initialValues={{
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            soDT: "",
            email: "",
            maLoaiNguoiDung: "HV",
            maNhom: "GP01",
          }}
          validationSchema={signupUserSchema}
          onSubmit={this._handleUpdateUserDetail}
          render={(formikProps) => (
            <Form>
              <div className="form-group">
                <label>Tài khoản: </label>
                <Field
                  type="text"
                  className="form-control"
                  name="taiKhoan"
                  onChange={formikProps.handleChange}
                ></Field>
                <ErrorMessage name="taiKhoan">
                  {(msg) => <div className="alert alert-dander">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label>Mật khẩu: </label>
                <Field
                  type="password"
                  className="form-control"
                  name="matKhau"
                  onChange={formikProps.handleChange}
                ></Field>
                <ErrorMessage name="matKhau" />
              </div>
              <div className="form-group">
                <label>Họ tên: </label>
                <Field
                  type="text"
                  className="form-control"
                  name="hoTen"
                  onChange={formikProps.handleChange}
                ></Field>
                <ErrorMessage name="hoTen" />
              </div>
              <div className="form-group">
                <label>Email: </label>
                <Field
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={formikProps.handleChange}
                ></Field>
                <ErrorMessage name="email" />
              </div>
              <div className="form-group">
                <label>Số điện thoại: </label>
                <Field
                  type="text"
                  className="form-control"
                  name="soDT"
                  onChange={formikProps.handleChange}
                ></Field>
                <ErrorMessage name="soDT" />
              </div>
              <div className="form-group">
                <label>Mã nhóm: </label>
                <Field
                  component="select"
                  className="form-control"
                  name="maNhom"
                  onChange={formikProps.handleChange}
                >
                  <option>GP01</option>
                  <option>GP02</option>
                  <option>GP03</option>
                  <option>GP04</option>
                  <option>GP05</option>
                  <option>GP06</option>
                  <option>GP07</option>
                  <option>GP08</option>
                  <option>GP09</option>
                  <option>GP10</option>
                </Field>
                <div className="form-group">
                  <label>Mã loại người dùng: </label>
                  <Field
                    component="select"
                    className="form-control"
                    name="maLoaiNguoiDung"
                    onChange={formikProps.handleChange}
                  >
                    <option>HV</option>
                    <option>GV</option>
                  </Field>
                </div>
                <div className="text-center">
                  <button className="btn btn-success">Submit</button>
                </div>
              </div>
            </Form>
          )}
        />

        <Formik
          initialValues={{
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            soDT: "",
            email: "",
            maLoaiNguoiDung: "HV",
            maNhom: "GP01",
          }}
          validationSchema={signupUserSchema}
          onSubmit={this._handleAddUser}
          render={(formikProps) => (
            <Form>
              <div className="form-group">
                <label>Tài khoản: </label>
                <Field
                  type="text"
                  className="form-control"
                  name="taiKhoan"
                  onChange={formikProps.handleChange}
                ></Field>
                <ErrorMessage name="taiKhoan">
                  {(msg) => <div className="alert alert-dander">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label>Mật khẩu: </label>
                <Field
                  type="password"
                  className="form-control"
                  name="matKhau"
                  onChange={formikProps.handleChange}
                ></Field>
                <ErrorMessage name="matKhau" />
              </div>
              <div className="form-group">
                <label>Họ tên: </label>
                <Field
                  type="text"
                  className="form-control"
                  name="hoTen"
                  onChange={formikProps.handleChange}
                ></Field>
                <ErrorMessage name="hoTen" />
              </div>
              <div className="form-group">
                <label>Email: </label>
                <Field
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={formikProps.handleChange}
                ></Field>
                <ErrorMessage name="email" />
              </div>
              <div className="form-group">
                <label>Số điện thoại: </label>
                <Field
                  type="text"
                  className="form-control"
                  name="soDT"
                  onChange={formikProps.handleChange}
                ></Field>
                <ErrorMessage name="soDT" />
              </div>
              <div className="form-group">
                <label>Mã nhóm: </label>
                <Field
                  component="select"
                  className="form-control"
                  name="maNhom"
                  onChange={formikProps.handleChange}
                >
                  <option>GP01</option>
                  <option>GP02</option>
                  <option>GP03</option>
                  <option>GP04</option>
                  <option>GP05</option>
                  <option>GP06</option>
                  <option>GP07</option>
                  <option>GP08</option>
                  <option>GP09</option>
                  <option>GP10</option>
                </Field>
                <div className="form-group">
                  <label>Mã loại người dùng: </label>
                  <Field
                    component="select"
                    className="form-control"
                    name="maLoaiNguoiDung"
                    onChange={formikProps.handleChange}
                  >
                    <option>HV</option>
                    <option>GV</option>
                  </Field>
                </div>
                <div className="text-center">
                  <button className="btn btn-success">Submit</button>
                </div>
              </div>
            </Form>
          )}
        />
        <br />
        <button onClick={()=>this._getUserDetail}>Thông tin người dùng </button>
        <br />
        <button onClick={()=>this._getUnregisteredCourses}>
          Danh sách khóa học chưa ghi danh
        </button>
        {/* <div className="container">
          <div className="row">
            {this.props.abcCourseList.map((item, index) => (
              <div className="col-3">
                <CourseItem item={item} />
              </div>
            ))}
          </div>
        </div> */}
        <br />
        <button onClick={()=>this._getPendingCourses}>
          Danh sách khóa học chờ xét duyệt
        </button>
        <br />
        <button onClick={()=>this._getApprovedCourses}>
          Danh sách khóa học đã xét duyệt
        </button>
        <br />
        <Formik
          initialValues={{
            maKhoaHoc: "",
          }}
          onSubmit={this._handleSubmit}
          render={(formikProps) => (
            <Form>
              <div className="form-group">
                <label>Mã khóa học: </label>
                <Field
                  component="select"
                  className="form-control"
                  name="maKhoaHoc"
                  onChange={formikProps.handleChange}
                >
                  {this.props.courseList.map((item, index) => (
                    <option>{item.maKhoaHoc}</option>
                  ))}
                </Field>
                <div className="text-center">
                  <button className="btn btn-success">Chọn</button>
                </div>
              </div>
            </Form>
          )}
        />
        <button onClick={()=>this._getUnregisteredStudents}>
          Danh sách người dùng chưa ghi danh
        </button>
        <br />
        <button onClick={()=>this._getPendingStudents}>
          Danh sách học viên chờ xét duyệt
        </button>
        <br />
        <button onClick={()=>this._getApprovedStudents}>
          Danh sách học viên khóa học
        </button>
        <br />
        {/* <Formik
          initialValues={{
            maKhoaHoc: "",
          }}
          onSubmit={this._handleSubmit}
          render={(formikProps) => (
            <Form>
              <div className="form-group">
                <label>Chọn người dùng muốn xóa: </label>
                <Field
                  component="select"
                  className="form-control"
                  name="maKhoaHoc"
                  onChange={formikProps.handleChange}
                >
                  {this.props.courseList.map((item, index) => (
                    <option>{item.maKhoaHoc}</option>
                  ))}
                </Field>
                <div className="text-center">
                  <button className="btn btn-success">Xóa</button>
                </div>
              </div>
            </Form>
          )}
        /> */}
        <button>
          <Link to="/user-list">Danh sách người dùng</Link>
        </button>
        <br />
        {/* <input type="text"></input>
        <button onClick={() => this._handleSearch()}>
          Tìm kiếm người dùng
        </button> */}
        <Formik
          initialValues={{
            searchKey: "",
          }}
          onSubmit={this._handleSearch}
          render={(formikProps) => (
            <Form>
              <div className="form-group">
                <Field
                  className="form-control"
                  name="searchKey"
                  onChange={formikProps.handleChange}
                ></Field>
                <div className="text-center">
                  <button className="btn btn-success">
                    Tìm kiếm người dùng
                  </button>
                </div>
              </div>
            </Form>
          )}
        />

        <Formik
          initialValues={{
            taiKhoan: "",
            matKhau: "",
            hoTen: "",
            soDT: "",
            email: "",
            maLoaiNguoiDung: "HV",
            maNhom: "GP01",
          }}
          validationSchema={signupUserSchema}
          onSubmit={this._handleAddUser}
          render={(formikProps) => (
            <Form>
              <div className="form-group">
                <label>Tài khoản: </label>
                <Field
                  type="text"
                  className="form-control"
                  name="taiKhoan"
                  onChange={formikProps.handleChange}
                ></Field>
                <ErrorMessage name="taiKhoan">
                  {(msg) => <div className="alert alert-dander">{msg}</div>}
                </ErrorMessage>
              </div>
              <div className="form-group">
                <label>Mật khẩu: </label>
                <Field
                  type="password"
                  className="form-control"
                  name="matKhau"
                  onChange={formikProps.handleChange}
                ></Field>
                <ErrorMessage name="matKhau" />
              </div>
              <div className="form-group">
                <label>Họ tên: </label>
                <Field
                  type="text"
                  className="form-control"
                  name="hoTen"
                  onChange={formikProps.handleChange}
                ></Field>
                <ErrorMessage name="hoTen" />
              </div>
              <div className="form-group">
                <label>Email: </label>
                <Field
                  type="email"
                  className="form-control"
                  name="email"
                  onChange={formikProps.handleChange}
                ></Field>
                <ErrorMessage name="email" />
              </div>
              <div className="form-group">
                <label>Số điện thoại: </label>
                <Field
                  type="text"
                  className="form-control"
                  name="soDT"
                  onChange={formikProps.handleChange}
                ></Field>
                <ErrorMessage name="soDT" />
              </div>
              <div className="form-group">
                <label>Mã nhóm: </label>
                <Field
                  component="select"
                  className="form-control"
                  name="maNhom"
                  onChange={formikProps.handleChange}
                >
                  <option>GP01</option>
                  <option>GP02</option>
                  <option>GP03</option>
                  <option>GP04</option>
                  <option>GP05</option>
                  <option>GP06</option>
                  <option>GP07</option>
                  <option>GP08</option>
                  <option>GP09</option>
                  <option>GP10</option>
                </Field>
                <div className="form-group">
                  <label>Mã loại người dùng: </label>
                  <Field
                    component="select"
                    className="form-control"
                    name="maLoaiNguoiDung"
                    onChange={formikProps.handleChange}
                  >
                    <option>HV</option>
                    <option>GV</option>
                  </Field>
                </div>
                <div className="text-center">
                  <button className="btn btn-success">Submit</button>
                </div>
              </div>
            </Form>
          )}
        />
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchCourses());
  }
}

const mapStateToProps = (state) => {
  return {
    abcCourseList: state.user.unregisteredCourses,
    courseList: state.course.courses,
    courseID: state.user.courseID || { maKhoaHoc: "" },
    accessToken: state.user.accessToken,
    userList: state.user.userList,
    credentials: state.user.credentials,
  };
};

export default connect(mapStateToProps)(UserAdmin);
