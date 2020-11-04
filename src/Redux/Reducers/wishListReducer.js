const initialState = {
    wishList: []
}

const wishListReducer = (state = initialState, actions) => {
    switch (actions.type){
        case "PUT_TO_WISHLIST": {
            const index = state.wishList.findIndex((item) => item.wishListCourse.tenKhoaHoc === actions.payload.tenKhoaHoc)

            const cloneWishList = [...state.wishList]
            if (index == -1) {
                const wishListItem = {
                    wishListCourse : actions.payload,
                    quantity: 1
                } 
                cloneWishList.push(wishListItem)
            } else {
                cloneWishList[index].quantity++
            }
        }

        default: return state;
    }
}
export default wishListReducer;