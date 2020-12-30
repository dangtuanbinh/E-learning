import React, { Component } from "react";
import CourseList from "../../Components/CourseList";
// import { Formik, Form, Field, ErrorMessage } from "formik";
import { courseService, userService } from "../../Services";
import CourseCatergories from "../../Components/CourseCatergories";
import { connect } from "react-redux";
import { createAction } from "../../Redux/Actions";
import {
  FETCH_COURSE_RESULT,
  FETCH_USER_DETAIL,
} from "../../Redux/Actions/type";

class CourseAdmin extends Component {
  _getAccessToken = () => {
    return JSON.parse(localStorage.getItem("accessToken"));
  };

  state = {
    maKhoaHoc: "",
    biDanh: "",
    tenKhoaHoc: "",
    moTa: "",
    luotXem: 0,
    danhGia: 0,
    hinhAnh: "",
    maNhom: "GP01",
    ngayTao: "06/12/2020",
    maDanhMucKhoaHoc: "BackEnd",
    taiKhoanNguoiTao: "admin_test",
    // taiKhoanNguoiTao: this.props.credentials.taiKhoan,
  };

  handleChange = (e) => {
    let target = e.target;
    if (target.name === "hinhAnh") {
      this.setState({ hinhAnh: e.target.files[0] }, () => {
        console.log(this.state);
      });
    } else {
      this.setState({ [e.target.name]: e.target.value }, () => {
        console.log(this.state);
      });
    }
  };

  _handleSubmit = (e) => {
    e.preventDefault();
    var form_data = new FormData();
    for (var key in this.state) {
      // console.log(key, this.state(key));
      form_data.append(key, this.state[key]);
      console.log("tenKhoaHoc", form_data.get(key));
    }

    // return;

    e.preventDefault();
    const accessToken = this._getAccessToken;
    courseService
      .uploadCourse(form_data, accessToken)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  _handleUpdate = (e) => {
    e.preventDefault();
    var form_data = new FormData();
    for (var key in this.state) {
      form_data.append(key, this.state[key]);
    }

    e.preventDefault();
    const accessToken = this._getAccessToken();
    console.log(accessToken);
    console.log(this.state.maKhoaHoc);
    courseService
      .updateCourse(form_data, accessToken)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  _handleSearch = (e) => {
    e.preventDefault();
    courseService
      .searchCourse(this.state.tenKhoaHoc)
      .then((res) => {
        console.log(res.data);
        this.props.dispatch(createAction(FETCH_COURSE_RESULT, res.data));
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };

  render() {
    return (
      <div>
        <div className="w-50 mx-auto">
          <h1 className="display-4 text-center">Lấy Danh Sách Khóa Học</h1>

          <h1 className="display-4 text-center">Tìm Kiếm Khóa Học</h1>
          <input
            type="text"
            className="form-control"
            name="tenKhoaHoc"
            onChange={this.handleChange}
          ></input>
          <div className="text-center">
            <button
              onClick={this._handleSearch}
              className="btn btn-success"
            >
              Tìm kiếm
            </button>
          </div>

          <h1 className="display-4 text-center">Cập nhập Khóa Học</h1>
          <form>
            <div className="form-group">
              <label>Mã khóa học </label>
              <input
                type="text"
                className="form-control"
                name="maKhoaHoc"
                onChange={this.handleChange}
              ></input>
              {/* <ErrorMessage name="maKhoaHoc">
                    {(msg) => <div className="alert alert-dander">{msg}</div>}
                  </ErrorMessage> */}
            </div>
            <div className="form-group">
              <label>Bí danh </label>
              <input
                type="text"
                className="form-control"
                name="biDanh"
                onChange={this.handleChange}
              ></input>
              {/* <ErrorMessage name="biDanh" /> */}
            </div>
            <div className="form-group">
              <label>Tên khóa học </label>
              <input
                type="text"
                className="form-control"
                name="tenKhoaHoc"
                onChange={this.handleChange}
              ></input>
              {/* <ErrorMessage name="tenKhoaHoc" /> */}
            </div>
            <div className="form-group">
              <label>Mô tả </label>
              <input
                type="text"
                className="form-control"
                name="moTa"
                onChange={this.handleChange}
              ></input>
              {/* <ErrorMessage name="moTa" /> */}
            </div>
            {/* <div className="form-group">
                  <label>Lượt xem </label>
                  <input
                    type="text"
                    className="form-control"
                    name="luotXem"
                    onChange={this.handleChange}
                  ></input>
                  <ErrorMessage name="luotXem" />
                </div>
                <div className="form-group">
                  <label>Đánh giá </label>
                  <input
                    type="text"
                    className="form-control"
                    name="danhGia"
                    onChange={this.handleChange}
                  ></input>
                  <ErrorMessage name="danhGia" />
                </div> */}
            <div className="form-group">
              <label>Hình ảnh </label>
              <input
                type="file"
                className="form-control"
                name="hinhAnh"
                onChange={this.handleChange}
              ></input>
              {/* <ErrorMessage name="hinhAnh" /> */}
            </div>
            {/* <div className="form-group">
              <label>Mã nhóm </label>
              <input
                type="text"
                className="form-control"
                name="maNhom"
                onChange={this.handleChange}
              ></input>
              <ErrorMessage name="maNhom" />
            </div>
            <div className="form-group">
              <label>Ngày tạo</label>
              <input
                type="text"
                className="form-control"
                name="ngayTao"
                onChange={this.handleChange}
              ></input>
              <ErrorMessage name="ngayTao" />
            </div> */}
            {/* <div className="form-group">
              <label>Mã danh mục khóa học </label>
              <input
                type="text"
                className="form-control"
                name="maDanhMucKhoaHoc"
                onChange={this.handleChange}
              ></input>
              <ErrorMessage name="maDanhMucKhoaHoc" />
            </div> */}
            {/* <div className="form-group">
              <label>Tài khoản người tạo </label>
              <input
                type="text"
                className="form-control"
                name="taiKhoanNguoiTao"
                onChange={this.handleChange}
              ></input>
              <ErrorMessage name="taiKhoanNguoiTao" />
            </div> */}

            <div className="text-center">
              <button
                onClick={this._handleUpdate}
                className="btn btn-success"
              >
                Cập nhập
              </button>
            </div>
          </form>

          <h1 className="display-4 text-center">Thêm Khóa Học</h1>
          <form>
            <div className="form-group">
              <label>Mã khóa học </label>
              <input
                type="text"
                className="form-control"
                name="maKhoaHoc"
                onChange={this.handleChange}
              ></input>
              {/* <ErrorMessage name="maKhoaHoc">
                    {(msg) => <div className="alert alert-dander">{msg}</div>}
                  </ErrorMessage> */}
            </div>
            <div className="form-group">
              <label>Bí danh </label>
              <input
                type="text"
                className="form-control"
                name="biDanh"
                onChange={this.handleChange}
              ></input>
              {/* <ErrorMessage name="biDanh" /> */}
            </div>
            <div className="form-group">
              <label>Tên khóa học </label>
              <input
                type="text"
                className="form-control"
                name="tenKhoaHoc"
                onChange={this.handleChange}
              ></input>
              {/* <ErrorMessage name="tenKhoaHoc" /> */}
            </div>
            <div className="form-group">
              <label>Mô tả </label>
              <input
                type="text"
                className="form-control"
                name="moTa"
                onChange={this.handleChange}
              ></input>
              {/* <ErrorMessage name="moTa" /> */}
            </div>
            {/* <div className="form-group">
                  <label>Lượt xem </label>
                  <input
                    type="text"
                    className="form-control"
                    name="luotXem"
                    onChange={this.handleChange}
                  ></input>
                  <ErrorMessage name="luotXem" />
                </div>
                <div className="form-group">
                  <label>Đánh giá </label>
                  <input
                    type="text"
                    className="form-control"
                    name="danhGia"
                    onChange={this.handleChange}
                  ></input>
                  <ErrorMessage name="danhGia" />
                </div> */}
            <div className="form-group">
              <label>Hình ảnh </label>
              <input
                type="file"
                className="form-control"
                name="hinhAnh"
                onChange={this.handleChange}
              ></input>
              {/* <ErrorMessage name="hinhAnh" /> */}
            </div>
            {/* <div className="form-group">
              <label>Mã nhóm </label>
              <input
                type="text"
                className="form-control"
                name="maNhom"
                onChange={this.handleChange}
              ></input>
              <ErrorMessage name="maNhom" />
            </div>
            <div className="form-group">
              <label>Ngày tạo</label>
              <input
                type="text"
                className="form-control"
                name="ngayTao"
                onChange={this.handleChange}
              ></input>
              <ErrorMessage name="ngayTao" />
            </div> */}
            {/* <div className="form-group">
              <label>Mã danh mục khóa học </label>
              <input
                type="text"
                className="form-control"
                name="maDanhMucKhoaHoc"
                onChange={this.handleChange}
              ></input>
              <ErrorMessage name="maDanhMucKhoaHoc" />
            </div> */}
            {/* <div className="form-group">
              <label>Tài khoản người tạo </label>
              <input
                type="text"
                className="form-control"
                name="taiKhoanNguoiTao"
                onChange={this.handleChange}
              ></input>
              <ErrorMessage name="taiKhoanNguoiTao" />
            </div> */}

            <div className="text-center">
              <button onClick={this._handleSubmit} className="btn btn-success">
                Thêm
              </button>
            </div>
          </form>

          <CourseList />
          <CourseCatergories />
        </div>
      </div>
    );
  }

  componentDidMount() {
    const accessToken = this._getAccessToken();
    userService
      .fetchUserDetail(accessToken)
      .then((res) => {
        this.props.dispatch(createAction(FETCH_USER_DETAIL, res.data));
        console.log(this.state);
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

const mapStateToProps = (state) => ({
  credentials: state.user.credentials || {
    taiKhoan: "",
  },
  accessToken: state.user.accessToken,
});

export default connect(mapStateToProps)(CourseAdmin);
