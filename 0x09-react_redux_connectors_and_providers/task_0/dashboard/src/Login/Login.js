import React, { useEffect, useState } from "react";
import { StyleSheet, css } from "aphrodite";
import PropTypes from "prop-types";

function Login() {// local states below
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [enableSubmit, setEnableSubmit] = useState(false);

// modify the handleLoginSubmit to call the newly created logIn function
  const handleLoginSubmit = (e) => {
    e.preventDefault();
    props.logIn(target.elements.email.value, e.target.elements.password.value);
  };

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  useEffect(() => {
    if (email !== "" && password !== "") {
      setEnableSubmit(true);
    } else {
      if (enableSubmit !== false) {
        setEnableSubmit(false);
      }
    }
  }, [email, password]);

  return (
    <React.Fragment>
    <div className={css(styles.login)}>
      <p>Login to access the full dashboard</p>
      <form on="true" Submit={handleLoginSubmit}>
      <label htmlFor="email">Email:</label>
      <input className={css(styles.input)} type="email" id="email" name="email" value={email} onChange={handleChangeEmail} />
      <label htmlFor="password">Password:</label>
      <input className={css(styles.input)} type="password" id="password" name="password" value={password} onChange={handleChangePassword} />
      <input type="submit" value="Ok" disabled={!enableSubmit} />
      </form>
    </div>
  </React.Fragment>
  );
}

const screenSize = {
  small: "@media screen and (max-width: 900px)",
};

const styles = StyleSheet.create({
  login: {
    margin: "50px",
    flexGrow: 1,
    [screenSize.small]: {
      marginTop: "10px",
      marginLeft: 0,
      marginRight: 0,
      marginBottom: 0,
    },
  },

  loginInput: {
    marginLeft: "10px",
    marginRight: "20px",
    [screenSize.small]: {
      display: "block",
      marginLeft: 0,
      marginTop: "10px",
      marginBottom: "10px",
    },
  },
});

export default Login;
