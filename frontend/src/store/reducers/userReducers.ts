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

const initialState = {
  users: [],
};

const userReducers = (
  state = initialState,
  action: { type: any; payload: any }
) => {
  switch (action.type) {
    // REGISTER SUCCESS CASE
    case REGISTER_USER_SUCESS:
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    // REGISTER FAIL CASE
    case REGISTER_USER_FAIL:
      return {
        error: action.payload,
      };

    // LOGIN SUCCESS CASE
    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        users: action.payload,
        isAuthenticated: true,
      };

    // LOGIN FAIL CASE
    case LOGIN_USER_FAIL:
      return {
        error: action.payload,
      };

    // USER LIST SUCCESS CASE
    case USER_LIST_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };

    // USER LIST FAIL CASE
    case USER_LIST_FAIL:
      return {
        error: action.payload,
      };

    // USER PROFILE SUCCESS CASE
    case USER_PROFILE_SUCCESS:
      return {
        ...state,
        userProfile: action.payload,
        error: null,
      };

    // USER PROFILE FAIL CASE
    case USER_PROFILE_FAIL:
      return {
        error: action.payload,
      };

    // DEFAULT CASE
    default:
      return state;
  }
};

export default userReducers;
