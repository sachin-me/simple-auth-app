const initState = {
  error: "",
  message: "",
  currentUser: {},
};

function rootReducer(state = initState, action) {
  switch (action.type) {
    case "CREATE_USER_SUCCESS": {
      return {
        ...state,
        message: action.message,
      };
    }
    case "CREATE_USER_FAIL": {
      return {
        ...state,
        error: action.error,
      };
    }
    case "SIGNIN_USER_SUCCESS": {
      return {
        ...state,
        message: action.message,
      };
    }
    case "SIGNIN_USER_FAIL": {
      return {
        ...state,
        error: action.error,
      };
    }
    default: {
      return state;
    }
  }
}

export default rootReducer;
