import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

const auth = ({ path, Component }) => {
  return (
    <div>
      <Route
        path={path}
        render={(routeProps) => {
          if (localStorage.getItem("credentials")) {
            return <Component {...routeProps} />;
          }

          alert(
            "Chỉ có giáo vụ mới có quyền truy cập trang này, vui lòng đăng nhập!"
          );
          return <Redirect to="/sign-in" />;
        }}
      />
    </div>
  );
};

export default auth;
