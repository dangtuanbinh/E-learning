const initialState = {
  courseList: [],
};

const courseReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "GET_LIST_COURSE": {
      state.courseList = actions.payload;
      return { ...state };
    }
    default:
      return state;
  }
};

export default courseReducer;
