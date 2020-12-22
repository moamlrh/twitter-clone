import { ACTIONS } from "./UserActions";

const userState = {
  userInfo: {},
  userIsLogin: false,
  loading: true,
};

export default (state = userState, { type, payload }) => {
  switch (type) {
    case ACTIONS.SIGNINCASE:
      return { ...state, user: payload, userIsLogin: true, loading: false };
    case ACTIONS.SIGNUPCASE:
      return {
        ...state,
        userInfo: { ...payload },
        userIsLogin: true,
        loading: false,
      };
    case ACTIONS.LOADING:
      return { ...state, loading: payload };
    case ACTIONS.LOGOUT:
      return { ...state, user: null, loading: null, userIsLogin: null };

    default:
      return state;
  }
};
