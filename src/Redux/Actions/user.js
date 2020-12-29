import { createAction } from ".";
import { userService } from "../../Services";
import { FETCH_ACCESS_TOKEN, FETCH_CREDENTIALS } from "./type";

export const logIn = (user) => {
  return (dispatch) => {
    userService
      .signIn(user)
      .then((res) => {
        dispatch(createAction(FETCH_CREDENTIALS, res.data));
        dispatch(createAction(FETCH_ACCESS_TOKEN, `Bearer ${res.data.accessToken}`));
        localStorage.setItem("credentials", JSON.stringify(res.data));
        localStorage.setItem("accessToken", JSON.stringify(`Bearer ${res.data.accessToken}`));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
