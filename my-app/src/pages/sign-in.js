import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../services/AuthContext";
import { login } from "../services/auth";

function Form() {
  const { log } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem("rememberedEmail");
    const storedRememberMe = localStorage.getItem("rememberedRememberMe");

    if (storedEmail) {
      setEmail(storedEmail);
      setRememberMe(storedRememberMe === "true");
    }
  }, []);

  const handleSignIn = async (event) => {
    event.preventDefault();

    try {
      await login(email, password);

      if (rememberMe) {
        localStorage.setItem("rememberedEmail", email);
        localStorage.setItem("rememberedRememberMe", rememberMe);
      } else {
        localStorage.removeItem("rememberedEmail");
        localStorage.removeItem("rememberedRememberMe");
      }

      navigate("/user");
      log();
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <form onSubmit={handleSignIn}>
      <div className="input-wrapper">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="username"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div className="input-remember">
        <input
          type="checkbox"
          id="remember-me"
          checked={rememberMe}
          onChange={(e) => setRememberMe(e.target.checked)}
        />
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
