import { LOGIN, LOGOUT } from "../actions/authActions";

interface AuthState {
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  isAuthenticated: false,
};

export const authReducer = (state = initialState, action: any): AuthState => {
  switch (action.type) {
    case LOGIN:
      return { isAuthenticated: true };
    case LOGOUT:
      return { isAuthenticated: false };
    default:
      return state;
  }
};