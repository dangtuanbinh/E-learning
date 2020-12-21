const initialState = {
  loggedInUser: "",
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER": {
      return { ...state, loggedInUser: action.payload };
    }
    case "DELETE_USER": {
      return {...state, loggedInUser: action.payload};
    }
    default:
      return state;
  }
};

export default authReducer;
