import {
  LOGIN_USER_SUCCESS,
  REGISTER_USER_SUCESS,
  USER_LIST_SUCCESS,
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
    case REGISTER_USER_SUCESS:
      return {
        ...state,
        users: [...state.users, action.payload],
      };

    case LOGIN_USER_SUCCESS:
      return {
        ...state,
        users: action.payload,
        isAuthenticated: true,
      };

    case USER_LIST_SUCCESS:
      return {
        ...state,
        users: action.payload,
      };

    case "USER_PROFILE_SUCCESS":
      return {
        ...state,
        userProfile: action.payload,
        error: null,
      };

    default:
      return state;
  }
};

export default userReducers;
