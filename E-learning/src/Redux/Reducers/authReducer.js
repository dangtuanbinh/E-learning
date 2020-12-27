const initialState = {
  loggedInUser: "",
  // credentials: "",
  accessToken: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER": {
      return { ...state, loggedInUser: action.payload };
    }
    case "DELETE_USER": {
      return {...state, credentials: action.payload};
    }
    // case "FETCH_CREDENTIALS": {
    //   return {...state, credentials: action.payload};
    // }
    case "FETCH_ACCESS_TOKEN": {
      return {...state, accessToken: action.payload};
    }
    default:
      return state;
  }
};

export default authReducer;
