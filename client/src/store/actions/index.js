const uri = "/api";

const actions = {
  createUser: (data) => {
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
          } else {
            dispatch({
              type: "CREATE_USER_FAIL",
              error: user.error,
            });
          }
        });
    };
  },
  loginUser: (data) => {
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
          } else {
            dispatch({
              type: "SIGNIN_USER_FAIL",
              error: user.error,
            });
          }
        });
    };
  },
};

module.exports = actions;
