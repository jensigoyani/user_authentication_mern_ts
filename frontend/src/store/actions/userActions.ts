import axios from "axios";
import { API_URL } from "../../config/user.config";
import {
  LOGIN_USER_FAIL,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_SUCESS,
  USER_LIST_FAIL,
  USER_LIST_SUCCESS,
  USER_PROFILE_FAIL,
  USER_PROFILE_SUCCESS,
} from "../../constants/actionConstants";

export const registerUser =
  (userFormData: any) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    try {
      const response = await axios.post(`${API_URL}/register`, userFormData);
      if (response.data && response.data.success) {
        dispatch({ type: REGISTER_USER_SUCESS, payload: userFormData });
      } else {
        dispatch({ type: REGISTER_USER_FAIL, payload: userFormData });
      }
    } catch (error) {
      throw error;
    }
  };

export const loginUser =
  (userFormData: any) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    try {
      const response = await axios.post(`${API_URL}/login`, userFormData);

      if (response.data && response.data.user) {
        dispatch({ type: LOGIN_USER_SUCCESS, payload: userFormData });
      } else {
        dispatch({ type: LOGIN_USER_FAIL, payload: response.data.error });
      }
    } catch (error) {
      throw error;
    }
  };

export const userListAction =
  () => async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    try {
      const response = await axios.get(`${API_URL}/list`);

      if (response.data && response.data.user) {
        dispatch({ type: USER_LIST_SUCCESS, payload: response.data.user });
      } else {
        dispatch({ type: USER_LIST_FAIL, payload: response.data.error });
      }
    } catch (error) {
      throw error;
    }
  };

export const userProfileAction =
  (loggedUserEmail: any) =>
  async (dispatch: (arg0: { type: string; payload: any }) => void) => {
    try {
      const response = await axios.get(
        `${API_URL}/profile?email=${loggedUserEmail}`
      );

      if (response.data && response.data.user) {
        dispatch({ type: USER_PROFILE_SUCCESS, payload: response.data.user });
      } else {
        dispatch({ type: USER_PROFILE_FAIL, payload: response.data.error });
      }
    } catch (error) {
      throw error;
    }
  };
