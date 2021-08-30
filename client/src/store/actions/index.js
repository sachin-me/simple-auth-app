const uri = "/api";

const actions = {
  createUser: (data, cb) => {
    return (dispatch) => {
      fetch(`${uri}/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((user) => {
          if (user.message) {
            dispatch({
              type: "CREATE_USER_SUCCESS",
              message: user.message,
            });
            cb(true);
          } else {
            dispatch({
              type: "CREATE_USER_FAIL",
              error: user.error,
            });
            cb(false);
          }
        });
    };
  },
  loginUser: (data, cb) => {
    return (dispatch) => {
      fetch(`${uri}/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((user) => {
          if (user.message) {
            dispatch({
              type: "SIGNIN_USER_SUCCESS",
              message: user.message,
            });
            cb(true);
          } else {
            dispatch({
              type: "SIGNIN_USER_FAIL",
              error: user.error,
            });
            cb(false);
          }
        });
    };
  },
  loggedInUser: () => {
    return (dispatch) => {
      fetch(`${uri}/profile`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "same-origin", // send cookies
      })
        .then((res) => res.json())
        .then((user) => {
          if (user.message) {
            dispatch({
              type: "LOGGED_IN_USER_SUCCESS",
              message: user.message,
              user: user.user,
            });
          } else {
            dispatch({
              type: "LOGGED_IN_USER_FAIL",
              error: user.error,
            });
          }
        });
    };
  },
};

module.exports = actions;
