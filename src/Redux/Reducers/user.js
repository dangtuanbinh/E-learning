let initialState = {
  credentials: null,
  accessToken: null,
  unregisteredCourses: [],
  pendingCourses: [],
  approvedCourses: [],
  unregisteredStudents: [],
  peningStudents: [],
  approvedStudents: [],
  courseID: null,
  userDetail: null,
  userList: [],
  userInfo: {},
};

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_CREDENTIALS":
      state.credentials = action.payload;
      return { ...state };
    case "FETCH_ACCESS_TOKEN":
      state.accessToken = action.payload;
      return { ...state };
    case "FETCH_UNREGISTERED_COURSES":
      state.unregisteredCourses = action.payload;
      return { ...state };
    case "FETCH_PENDING_COURSES":
      state.pendingCourses = action.payload;
      return { ...state };
    case "FETCH_APPROVED_COURSES":
      state.approvedCourses = action.payload;
      return { ...state };
    case "FETCH_UNREGISTERED_STUDENTS":
      state.unregisteredStudents = action.payload;
      return { ...state };
    case "FETCH_PENDING_STUDENTS":
      state.pendingStudents = action.payload;
      return { ...state };
    case "FETCH_APPROVED_STUDENTS":
      state.approvedStudents = action.payload;
      return { ...state };
    case "FETCH_COURSE_ID":
      state.courseID = action.payload;
      return { ...state };
    case "FETCH_USER_DETAIL":
      state.userDetail = action.payload;
      return { ...state };
    case "SIGN_OUT":
      state.credentials = null;
      state.accessToken = null;
      localStorage.setItem("credentials", null);
      localStorage.setItem("accessToken", null);
      return { ...state };
    case "FETCH_USER_LIST":
      state.userList = action.payload;
      return { ...state };
      case "FETCH_USER_INFO":
        state.userInfo = action.payload;
        return { ...state };
    default:
      return state;
  }
};

export default UserReducer;
