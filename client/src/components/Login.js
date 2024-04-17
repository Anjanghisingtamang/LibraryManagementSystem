import React, { useState, useEffect } from "react";
import basestyle from "../CSS/Base.module.css";
import loginstyle from "../CSS/Login.module.css";
import axios from "axios";
import { useNavigate, NavLink } from "react-router-dom";

const Login = ({ setUserState }) => {
  const navigate = useNavigate();
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [user, setUserDetails] = useState({
    EmailAddress: "",
    Password: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setUserDetails({
      ...user,
      [name]: value,
    });
  };

  const validateForm = (values) => {
    const error = {};
    const regex = /^[^\s+@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.EmailAddress) {
      error.EmailAddress = "Email is required";
    } else if (!regex.test(values.EmailAddress)) {
      error.EmailAddress = "Please enter a valid email address";
    }
    if (!values.Password) {
      error.Password = "Password is required";
    }
    return error;
  };

  const loginHandler = (e) => {
    e.preventDefault();
    setFormErrors(validateForm(user));
    setIsSubmit(true);

    // Check for form errors before making the API call
    if (Object.keys(formErrors).length === 0) {
      // Make the API call to login
      axios.post("http://localhost:8080/Login", user)
        .then((res) => {
          if (res.status === 200) {
            alert("Login successful");
            setUserState(res);
            navigate("/", { replace: true });
          } else {
            // Display error message from the API response
            alert(res.data.message.details);
          }
        })
        .catch((error) => {
          // Handle error in case of failed API call
          console.error('Login failed:', error);

          if (error.response && error.response.data && error.response.data.message) {
            const errorMessage = error.response.data.message.details;
            alert(errorMessage || 'An unexpected error occurred. Please try again.');
          } else {
            alert('An unexpected error occurred. Please try again.');
          }
        });
    }
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(user);
    }
  }, [formErrors]);

  const containerStyle = {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundImage: 'url("https://coolbackgrounds.io/images/backgrounds/index/ranger-4df6c1b6.png")'
  };

  return (
    <div className="loginmain" style={containerStyle}>
      <div className={loginstyle.login}>
        <form>
          <h1>Login</h1>
          <input
            type="email"
            name="EmailAddress"
            id="EmailAddress"
            placeholder="EmailAddress"
            onChange={changeHandler}
            value={user.EmailAddress}
          />
          <p className={basestyle.error}>{formErrors.EmailAddress}</p>
          <input
            type="password"
            name="Password"
            id="Password"
            placeholder="Password"
            onChange={changeHandler}
            value={user.Password}
          />
          <p className={basestyle.error}>{formErrors.Password}</p>
          <button className={basestyle.button_common} onClick={loginHandler}>
            Login
          </button>
        </form>
        <NavLink to="/signup">Not yet registered? Register Now</NavLink>
      </div>
    </div>
  );
};

export default Login;
