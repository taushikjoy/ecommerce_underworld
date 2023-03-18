import { loginSuccess, loginStart, loginFailure } from "./userSlice";
import { publicRequest } from "../requestMethod";

export const login = async (dispatch, user) => {

  dispatch(loginStart());

  try {
    const res = await publicRequest.post("/auth/login",user);
    dispatch(loginSuccess(res.data.user));
  } catch (error) {
    dispatch(loginFailure());
  }
};
