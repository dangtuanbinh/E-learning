let initialState = {
  courses: [],
  courseDetail: null,
  courseCategories: [],
  courseCategoriesItemDetail: [],
  courseStudents: [],
  courseResult: [],
  courseByPage: [],
};

const CourseReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_COURSES":
      state.courses = action.payload;
      return { ...state };
    case "FETCH_COURSE_DETAIL":
      state.courseDetail = action.payload;
      return { ...state };
    case "FETCH_COURSE_CATEGORIES":
      state.courseCategories = action.payload;
      return { ...state };
    case "FETCH_COURSE_CATEGORIES_DETAIL":
      state.courseCategoriesItemDetail = action.payload;
      return { ...state };
    case "CLEAR_COURSE_CATEGORIES_DETAIL":
      state.courseCategoriesItemDetail = [];
      state.courseStudents = [];
      return { ...state };
    case "FETCH_COURSE_STUDENTS":
      state.courseStudents = action.payload;
      return { ...state };
    case "FETCH_COURSE_RESULT":
      state.courseResult = action.payload;
      return { ...state };
    default:
      return state;
  }
};

export default CourseReducer;
