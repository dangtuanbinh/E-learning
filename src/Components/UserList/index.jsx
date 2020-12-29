import React from "react";
import "./index.scss";

const UserList = ({ userList, index }) => {
  return (
    <>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>{userList.hoTen}</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
      </tbody>
    </>
  );
};

export default UserList;
