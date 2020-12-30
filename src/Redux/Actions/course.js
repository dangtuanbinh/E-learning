import { createAction } from ".";
import { courseService } from "../../Services";
import {
  FETCH_COURSES,
  FETCH_COURSE_CATEGORIES,
} from "./type";

//async action
export const fetchCourses = () => {
  return (dispatch) => {
    courseService
      .fetchCourse()
      .then((res) => {
        dispatch(createAction(FETCH_COURSES, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const fetchCourseCategories = () => {
  return (dispatch) => {
    courseService
      .fetchCourseCategories()
      .then((res) => {
        dispatch(createAction(FETCH_COURSE_CATEGORIES, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// export const fetchCoursesByPage = () => {
//   return (dispatch) => {
//     courseService
//       .fetchCoursesByPage(1,8)
//       .then((res) => {
//         dispatch(createAction(FETCH_COURSES_BY_PAGE, res.data.items));
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
// };
