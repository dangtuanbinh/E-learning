const initialState = {
    detailList : [],
}

const detailCourseReducer = (state = initialState, actions) => {
    switch (actions.type) {
        case "GET_DETAIL_COURSE" : {
            state.detailList = actions.payload;
            return {...state}
        }
        default: return state;
    }
}

export default detailCourseReducer;