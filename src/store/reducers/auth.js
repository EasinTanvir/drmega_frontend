export const authReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case "SIGN_UP":
      return { ...state, user: action.payload };

    case "SIGN_IN":
      return { ...state, user: action.payload };

    case "LOG_OUT":
      return { user: {} };

    default:
      return state;
  }
};

export const extraIdReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case "EXTRA_ID":
      return { ...state, user: action.payload };

    case "LOG_OUT":
      return { user: {} };

    default:
      return state;
  }
};
