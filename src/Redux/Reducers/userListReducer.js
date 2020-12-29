const initialState = {
  userList: [],
};

const userListReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "GET_USER_LIST": {
        state.userList = actions.payload;
        return {...state}
    }
    default:
      return state;
  }
};

export default userListReducer;
