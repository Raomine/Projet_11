import React, { useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../services/auth";
import { useDispatch } from "react-redux";
import { setToken } from "../stores/user";

function Form() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const emailInputRef = useRef();

  useEffect(() => {
    const email = JSON.parse(localStorage.getItem("remember-me"));

    if (emailInputRef.current) {
      emailInputRef.current.value = email;
    }
  }, []);

  const handleSignIn = async (event) => {
    event.preventDefault();

    const formData = Object.fromEntries(new FormData(event.currentTarget));

    try {
      const userData = await login(formData.email, formData.password);

      dispatch(setToken(userData.token));

      localStorage.setItem("remember-me", JSON.stringify(formData.email));

      navigate("/user");
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <form onSubmit={handleSignIn}>
      <div className="input-wrapper">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" ref={emailInputRef} required />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="password" name="password" required />
      </div>
      <div className="input-remember">
        <input type="checkbox" name="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>
      <button type="submit" className="sign-in-button">
        Sign In
      </button>
    </form>
  );
}

function Sign() {
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <Form />
      </section>
    </main>
  );
}

export default Sign;
