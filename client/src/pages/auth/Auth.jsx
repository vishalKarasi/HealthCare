import "./auth.css";
import React, { useState } from "react";
import useLogin from "@hooks/auth/useLogin";
import { LoginIcon } from "@assets/icons/icons";

function Auth() {
  const [credential, setCredential] = useState({
    email: "",
    password: "",
  });

  const { loading, login } = useLogin();

  const handleChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(credential);
    setCredential({ email: "", password: "" });
  };

  return (
    <main className="auth">
      <form onSubmit={handleSubmit}>
        <h2>Admin Login</h2>
        <input
          type="text"
          name="email"
          placeholder="Enter email"
          value={credential.email}
          onChange={handleChange}
        />
        <input
          type="text"
          name="password"
          placeholder="Enter password"
          value={credential.password}
          onChange={handleChange}
        />
        <button type="submit" className="btn btnPrimary" disabled={loading}>
          {loading ? (
            "Loading..."
          ) : (
            <>
              <LoginIcon />
              Login
            </>
          )}
        </button>
        <small>email- admin@gmail.com | password - Admin@123</small>
      </form>
    </main>
  );
}

export default Auth;
