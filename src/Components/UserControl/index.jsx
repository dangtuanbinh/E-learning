import { Box } from "@material-ui/core";
import React from "react";
import Col from "reactstrap/lib/Col";
import Row from "reactstrap/lib/Row";
import UserList from "../UserList/index";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserList } from "../../Redux/Actions/userAction";
import { Table } from "reactstrap";

import "./index.scss";

const UserControl = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserList());
  }, []);

  // get user list from store
  const userList = useSelector((state) => {
    return state.userList.userList;
  });

  // take student user
  const studentList = userList.filter((student) => {
    return student.maLoaiNguoiDung === "HV";
  });

  // take teacher list
  const teacherList = userList.filter((teacher) => {
    return teacher.maLoaiNguoiDung === "GV";
  });

  // Render user list table
  const renderUserList = () => {
    return userList.map((userList, index) => {
      return <UserList userList={userList} key={index} />;
    });
  };
  return (
    <>
      <Box className="userControl">
        <Box className="userControl__title">
          <h2>User Management</h2>
        </Box>

        <Box className="userControl__content">
          <Row>
            <Col xs="12" md="4" lg="4">
              <Box className="userControl__summary">
                <ul>
                  <li>
                    Number of Studens : <span>{studentList.length}</span>
                  </li>

                  <li>
                    Number of Teachers/Admin : <span>{teacherList.length}</span>
                  </li>

                  <li>
                    Total users : <span>{userList.length}</span>
                  </li>
                </ul>
              </Box>
            </Col>

            <Col xs="12" md="8" lg="8">
              <Box className="userControl__list">
                <Table className="userControl__table" dark>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Full name</th>
                      <th>Type of user</th>
                      <th>Setting</th>
                    </tr>
                  </thead>
                  {renderUserList()}
                </Table>
              </Box>
            </Col>
          </Row>
        </Box>
      </Box>
    </>
  );
};

export default UserControl;
