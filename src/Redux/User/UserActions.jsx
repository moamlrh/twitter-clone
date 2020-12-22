export const ACTIONS = {
  SIGNUPCASE: "SIGNUPCASE",
  SIGNINCASE: "SIGNINCASE",
  LOADING: "LOADING",
  LOGOUT: "LOGOUT",
};

export const signupCase = (user) => ({
  type: ACTIONS.SIGNUPCASE,
  payload: user,
});
export const signinCase = (user) => ({
  type: ACTIONS.SIGNINCASE,
  payload: user,
});
export const loadingCase = (loading) => ({
  type: ACTIONS.LOADING,
  payload: loading,
});

export const logoutCase = () => ({
  type: ACTIONS.LOGOUT,
});
