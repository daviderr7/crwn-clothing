import React, { useState } from "react";
import { connect } from "react-redux";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { signUpStart } from "../../redux/user/user.actions";

import "./sign-up.styles.scss";

const SignUp = ({ signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { email, displayName, password, confirmPassword } = userCredentials;
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    signUpStart({ email, password, displayName });
  };

  const handleChange = (event) => {
    const { value, name } = event.target;

    setUserCredentials({...userCredentials, [name]: value });
  };

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          name="displayName"
          type="text"
          onChange={handleChange}
          value={displayName}
          label="Display Name"
          required
        />
        <FormInput
          name="email"
          type="email"
          onChange={handleChange}
          value={email}
          label="Email"
          required
        />
        <FormInput
          name="password"
          type="password"
          onChange={handleChange}
          value={password}
          label="Password"
          required
        />
        <FormInput
          name="confirmPassword"
          type="password"
          onChange={handleChange}
          value={confirmPassword}
          label="Confirm password"
          required
        />
        <CustomButton type={"submit"}>SIGN UP</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});

export default connect(null, mapDispatchToProps)(SignUp);
