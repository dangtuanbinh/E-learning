import React, { Component } from "react";
import { connect } from "react-redux";
import { createAction } from "../../Redux/Actions";
import { FETCH_USER_LIST } from "../../Redux/Actions/type";
import { userService } from "../../Services";

class UserList extends Component {
  render() {
    return (
      <div>
        {this.props.userList.map((item, index) => (
          <div className="card row" key={index}>
            <p className="col-4">Tài khoản: {item.taiKhoan}</p>
            <p className="col-4">Họ tên: {item.hoTen}</p>
            <p className="col-4">
              Loại người dùng:
              {item.maLoaiNguoiDung === "HV" ? (
                <span> Học viên</span>
              ) : (
                <span> Giáo vụ</span>
              )}
            </p>
            <button
              className="col-2"
              onClick={() => this._handleDelete(item.taiKhoan)}
            >
              Xóa người dùng
            </button>
          </div>
        ))}
      </div>
    );
  }

  _handleDelete = (user) => {
    userService
      .deleteUser(user, this.props.accessToken)
      .then((res) => {
        console.log(res);
        alert(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    userService
      .fetchUserList()
      .then((res) => {
        this.props.dispatch(createAction(FETCH_USER_LIST, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

const mapStateToProps = (state) => {
  return {
    userList: state.user.userList,
    accessToken: state.user.accessToken,
  };
};

export default connect(mapStateToProps)(UserList);
