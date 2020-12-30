const initialState = {
  wishList: [],
};

const wishListReducer = (state = initialState, actions) => {
  switch (actions.type) {
    case "PUT_TO_WISHLIST": {
      const index = state.wishList.findIndex(
        (item) =>
          item.wishListCourse.course.tenKhoaHoc ===
          actions.payload.course.tenKhoaHoc
      );
      
      if (index == -1) {
        const wishListItem = {
          wishListCourse: actions.payload,
          quantity: 1,
        };
        return {
          wishList: [...state.wishList,wishListItem]
        }
      } else {
        const cloneWishList = [...state.wishList];
        return cloneWishList[index].quantity++;
      }
    }

    default:
      return state;
  }
};
export default wishListReducer;
