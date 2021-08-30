import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import helperFunctions from "../../Helper";
import actions from "../../store/actions";
import Message from "../Common/Message";
import SigninForm from "./SigninForm";
let { validateEmail, validatePassword } = helperFunctions;

function Signin(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [validPassword, setValidPassword] = useState(true);

  const dispatch = useDispatch();
  const { message, error } = useSelector((state) => {
    return {
      message: state.message,
      error: state.error,
    };
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    const payload = {
      email,
      password,
    };
    dispatch(
      actions.loginUser(payload, (success) => {
        if (success) {
          props.history.push("/");
        }
      })
    );
  };

  const validateEmailPassword = () => {
    setValidEmail(validateEmail(email));
    setValidPassword(validatePassword(password));
  };

  useEffect(() => {
    if (email || password) {
      if (email && !validEmail) {
        return dispatch({
          type: "SIGNIN_USER_FAIL",
          error: "*Enter valid email address (e.g. abc@gmail.com)",
        });
      }
      if (password && !validPassword) {
        return dispatch({
          type: "SIGNIN_USER_FAIL",
          error:
            "*Password must contain 4-8 characters and at least One Uppercase letter and one numeric value.",
        });
      } else {
        return dispatch({
          type: "SIGNIN_USER_FAIL",
          error: "",
        });
      }
    }
  }, [email, password]);

  return (
    <div className="form-wrapper">
      <SigninForm
        setEmail={setEmail}
        setPassword={setPassword}
        handleSubmit={handleSubmit}
        validateEmailPassword={validateEmailPassword}
      />
      <Message message={message} error={error} />
      <div className="center mt-2">
        <Link to="/signup">Create an account</Link>
      </div>
    </div>
  );
}

export default Signin;
