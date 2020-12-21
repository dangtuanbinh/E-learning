import Axios from "axios";
import * as yup from "yup";

export const signupUserSchema = yup.object().shape({
  taiKhoan: yup.string().required("*Field is required!"),
  matKhau: yup.string().required("*Field is required!"),
  hoTen: yup.string().required("*Field is required!"),
  email: yup
    .string()
    .required("*Field is required!")
    .email("*Email is invalid"),
  soDT: yup
    .string()
    .matches(/^[0-9]+$/)
    .required("*Field is required!"),
  maNhom: yup.string().required("*Field is required!"),
});

// export function _getAccessToken() {
//   const token = JSON.parse(localStorage.getItem("credentials"));
//   return `Bearer ${token.accessToken}`;
// }

class UserService {
  fetchUserType() {
    return Axios({
      method: "GET",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung",
    });
  }
  signUp(data) {
    return Axios({
      method: "POST",
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
      data,
    });
  }
  signIn(user) {
    return Axios({
      method: "POST",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
      data: user,
    });
  }
  fetchUnregistedCourses(user, accessToken) {
    return Axios({
      method: "POST",
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachKhoaHocChuaGhiDanh?TaiKhoan=${user}`,
      headers: { Authorization: `${accessToken}` },
    });
  }
  fetchPendingCourses(user, accessToken) {
    return Axios({
      method: "POST",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachKhoaHocChoXetDuyet",
      headers: { Authorization: `${accessToken}` },
      data: { taiKhoan: `${user}` },
    });
  }
  fetchApprovedCourses(user, accessToken) {
    return Axios({
      method: "POST",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachKhoaHocDaXetDuyet",
      headers: { Authorization: `${accessToken}` },
      data: { taiKhoan: `${user}` },
    });
  }
  fetchUnregisteredStudents(courseID, accessToken) {
    return Axios({
      method: "POST",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDungChuaGhiDanh",
      headers: { Authorization: `${accessToken}` },
      data: { maKhoaHoc: `${courseID}` },
    });
  }
  fetchPendingStudents(courseID, accessToken) {
    return Axios({
      method: "POST",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachHocVienChoXetDuyet",
      headers: { Authorization: `${accessToken}` },
      data: { maKhoaHoc: `${courseID}` },
    });
  }
  fetchApprovedStudents(courseID, accessToken) {
    return Axios({
      method: "POST",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachHocVienKhoaHoc",
      headers: { Authorization: `${accessToken}` },
      data: { maKhoaHoc: `${courseID}` },
    });
  }
  fetchUserDetail(accessToken) {
    return Axios({
      method: "POST",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinNguoiDung",
      headers: { Authorization: `${accessToken}` },
    });
  }
  deleteUser(userName, accessToken) {
    return Axios({
      method: "DELETE",
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${userName}`,
      headers: { Authorization: `${accessToken}` },
    });
  }
  fetchUserList() {
    return Axios({
      method: "GET",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=GP01",
    });
  }
  fetchUserListByPage(page, pageSize) {
    return Axios({
      method: "GET",
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/LayDanhSachNguoiDung_PhanTrang?MaNhom=GP01&page=${page}&pageSize=${pageSize}`,
    });
  }
  searchUser(searchKey) {
    return Axios({
      method: "GET",
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/TimKiemNguoiDung?MaNhom=GP01&tuKhoa=${searchKey}`,
    });
  }
  fetchUserInfo(user, accessToken) {
    return Axios({
      method: "POST",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan",
      headers: { Authorization: `${accessToken}` },
      data:user,
    });
  }
  addUser(data, accessToken) {
    return Axios({
      method: "POST",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThemNguoiDung",
      headers: { Authorization: `${accessToken}` },
      data,
    });
  }
  updateUserDetail(data, accessToken) {
    return Axios({
      method: "PUT",
      url:
        'https://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
      headers: { Authorization: `${accessToken}` },
      data,
    });
  }
}

// LayDanhSachNguoiDung_PhanTrang
// LayDanhSachLoaiNguoiDung

export default UserService;
