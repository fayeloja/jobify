import React from "react";
import { Form, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" defaultValue="fatai" />
        <FormRow
          type="text"
          name="lastName"
          labelText="Last Name"
          defaultValue="ayeloja"
        />
        <FormRow type="email" name="email" defaultValue="fayeloja@gmail.com" />
        <FormRow type="text" name="name" defaultValue="fatai" />
        <FormRow type="text" name="name" defaultValue="fatai" />

        <FormRow
          type="password"
          name="password"
          labelText="Password"
          defaultValue="secret123"
        />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};

export default Register;
