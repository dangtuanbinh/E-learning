import Axios from "axios";

export const signUp = (user) => {
  return (dispatch) => {
    Axios({
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      method: "POST",
      data: user,
    })
      .then((res) => {
        alert("Sign up sucessful");
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const logIn = (loginUser) => {
  return (dispatch) => {
    Axios({
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      method: "POST",
      data: loginUser,
    })
      .then((res) => {
        localStorage.setItem("accessToken", res.data.accessToken);
        dispatch({
          type: "SET_USER",
          payload: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
