export const LOG_IN = "log_in";
export const LOG_OUT = "log_out";

export function logInAction() {
  return { type: LOG_IN };
}
export function logOutAction() {
  return { type: LOG_OUT };
}

const initialState = {
  token: null,
};

const accountAuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return { ...state, token: action.payload };
    case LOG_OUT:
      return { ...state, token: null };
    default:
      return state;
  }
};

export default accountAuthReducer;
