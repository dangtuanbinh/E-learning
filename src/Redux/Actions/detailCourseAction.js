import {connector} from "../../config/connector"

export const getDetailCourse = (id) => {
    return (dispatch) => {
        connector({
            url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=" + id,
            method: "GET",
            data: null,
        }).then((res) => {
            dispatch({
                type: "GET_DETAIL_COURSE",
                payload: res.data,
            })
        }).catch((err) => {
            alert("Sorry, the server has been busy now: " + err)
        })
    }
}
