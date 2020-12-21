import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchCourseCategories } from "../../Redux/Actions/course";

class CourseCategories extends Component {
  render() {
    return (
      <>
        <h1>Danh Mục Khóa Học</h1>
        <div className="row">
          {this.props.CourseCategories.map((item, index) => (
            <Link
              className="card col-3"
              to={`/course-categories-detail/${item.maDanhMuc}`}
            >
              <p>{item.tenDanhMuc}</p>
              <p>ID: {item.maDanhMuc}</p>
            </Link>
          ))}
        </div>
      </>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchCourseCategories());
  }
}

const mapStateToProps = (state) => ({
  CourseCategories: state.course.courseCategories,
});

export default connect(mapStateToProps)(CourseCategories);
