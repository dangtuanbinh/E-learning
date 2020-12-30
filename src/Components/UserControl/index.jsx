<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> updateSearchApi
import { Box } from "@material-ui/core";
import React from "react";
import Col from "reactstrap/lib/Col";
import Row from "reactstrap/lib/Row";
import UserList from "../UserList/index";

import "./index.scss";

const UserControl = () => {
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
                    Number of Studens : <span>100</span>
                  </li>

                  <li>
                    Number of Teachers/Admin : <span>50</span>
                  </li>

                  <li>
                    Total users : <span>150</span>
                  </li>
                </ul>
              </Box>
            </Col>

            <Col xs="12" md="8" lg="8">
              <Box className="userControl__list">
                <UserList />
              </Box>
            </Col>
          </Row>
        </Box>
      </Box>
    </>
  );
};

export default UserControl;
<<<<<<< HEAD
=======
import React from 'react'

import "./index.scss"

const UserControl = () => {
    return (
        <div>
            this is User control
        </div>
    )
}

export default UserControl
>>>>>>> testagain2
=======
>>>>>>> updateSearchApi
