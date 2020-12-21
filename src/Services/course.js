import Axios from "axios";

class CourseService {
  fetchCourse() {
    return Axios({
      method: "GET",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01",
    });
  }
  searchCourse(courseName) {
    return Axios({
      method: "GET",
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?tenKhoaHoc=${courseName}&MaNhom=GP01`,
    });
  }
  fetchCourseCategories() {
    return Axios({
      method: "GET",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhMucKhoaHoc",
    });
  }
  fetchCoursesByPage(page, pageSize) {
    return Axios({
      method: "GET",
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc_PhanTrang?page=${page}&pageSize=${pageSize}&MaNhom=GP01`,
    });
  }
  fetchCourseCategoriesDetail(id) {
    return Axios({
      method: "GET",
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${id}&MaNhom=GP01`,
    });
  }

  fetchCourseDetail(id) {
    return Axios({
      method: "GET",
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${id}`,
    });
  }
  fetchCourseStudents(id, accessToken) {
    return Axios({
      method: "GET",
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinHocVienKhoaHoc?maKhoaHoc=${id}`,
      headers: { Authorization: `${accessToken}` },
    });
  }
  uploadCourse(form_data) {
    return Axios({
      method: "POST",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/ThemKhoaHocUploadHinh",
      data: form_data,
    });
  }
  // updateCourse(form_data, accessToken) {
  //   return Axios({
  //     method: "POST",
  //     url:
  //       "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/CapNhatKhoaHocUpload",
  //     data: form_data,
  //     headers: { Authorization: `${accessToken}` },
  //     // CHUA CHAY DUOC
  //   });
  // }
  deleteCourse(courseID, accessToken) {
    return Axios({
      method: "DELETE",
      url: `https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/XoaKhoaHoc?MaKhoaHoc=${courseID}`,
      headers: { Authorization: `${accessToken}` },
    });
  }
  confirmRegistration(data, accessToken) {
    return Axios({
      method: "POST",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/GhiDanhKhoaHoc",
      headers: { Authorization: `${accessToken}` },
      data,
    });
  }
  registerCourse(data, accessToken) {
    return Axios({
      method: "POST",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/DangKyKhoaHoc",
      headers: { Authorization: `${accessToken}` },
      data,
    });
  }
  cancelRegistration(data, accessToken) {
    return Axios({
      method: "POST",
      url:
        "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/HuyGhiDanh",
      headers: { Authorization: `${accessToken}` },
      data,
    });
  }
}

// LayDanhSachKhoaHoc_PhanTrang
//CapNhatKhoaHoc: bi loi

export default CourseService;
