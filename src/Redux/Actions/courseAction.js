import Axios from 'axios';
import {connector} from "../../config/connector"
 
export const getListCourse = () => {
    return (dispatch) => {
        connector({
            url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
            method: "GET",
            data: null,
        }).then((res) => {
                dispatch({
                    type: "GET_LIST_COURSE",
                    payload:res.data,
                })
        }).catch((err) => {
            console.log(err)
        });
    }
}