import { useAuth } from "../components/AuthContext";
import { login } from "../components/auth";

function Form() {
  const { log } = useAuth();

  const handleSignIn = async (event) => {
    event.preventDefault();

    // Get username and password from form inputs (you may use state or refs)
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Call the login function
    await login(username, password);
  };
  log();

  return (
    <form onSubmit={handleSignIn}>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
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
    <>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <Form />
        </section>
      </main>

      <script></script>
    </>
  );
}

export default Sign;
