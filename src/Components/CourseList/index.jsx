import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCourses } from "../../Redux/Actions/course";
import CourseItem from "../CourseItem";


class CourseList extends Component {
  render() {
    return (
      <div>
        <h1 className="display-4 text-center">Danh Sách Khóa Học</h1>
        <button>Thêm khóa học</button>
        <div className="container">
          <div className="row">
            {this.props.courseList.map((item, index) => (
              <div className="col-3">
                <CourseItem item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  componentDidMount() {
    this.props.dispatch(fetchCourses());
  }
}

const mapStatetoProps = (state) => ({
    courseList: state.course.courses,
  });

export default connect(mapStatetoProps)(CourseList);
