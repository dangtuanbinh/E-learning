const initialState ={
    accessToken = []
}

const authReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case "SET_TOKEN": {
            state.accessToken = actions.payload;
            return {...state};
        }
        default: return state;
    }
}