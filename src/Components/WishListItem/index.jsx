import React from "react";

const WishListItem = ({course}) => {
    return (
        <>
        <h1>{course.wishListCourse.course.tenKhoaHoc}</h1>
        </>
    )
}

export default WishListItem;