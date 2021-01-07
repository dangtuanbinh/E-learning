import {connector} from "../../config/connector";

export const signUp = (user,history) => {
  return (dispatch) => {
    connector({
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      method: "POST",
      data: user,
    })
      .then((res) => {
        history.push("/")
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const logIn = (loginUser) => {
  return (dispatch) => {
    connector({
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: loginUser,
    })
      .then((res) => {
        localStorage.setItem("credentials", JSON.stringify(res.data));
        localStorage.setItem("accessToken", JSON.stringify(`Bearer ${res.data.accessToken}`));
        dispatch({
          type: "SET_USER",
          payload: res.data,
        });
      })
      .catch((err) => {
        alert(err);
      });
  };
};

export const getUserList = (userList) => {
  return (dispatch) => {
    connector({
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01",
      method: "GET",
      data: userList,
    }).then((res) => {
      console.log(res)
      dispatch({
        type: "GET_USER_LIST",
        payload: res.data,
      })
    }).catch((err) => {
      console.log(err)
    })
  } 
}
