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
    case "LOGGED_IN_USER_SUCCESS": {
      return {
        ...state,
        message: action.message,
        currentUser: action.user,
      };
    }
    case "LOGGED_IN_USER_FAIL": {
      return {
        ...state,
        error: action.error,
      };
    }
    case "LOGOUT_USER": {
      return {
        ...state,
        message: action.message
      }
    }
    default: {
      return state;
    }
  }
}

export default rootReducer;
