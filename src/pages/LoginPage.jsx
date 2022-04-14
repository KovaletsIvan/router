import React from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../hook/useAuth";

export const LoginPage = () => {
  const navigate = useNavigate();
  const { singin } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const user = form.username.value;
    singin(user, () => navigate("/posts", { replace: true }));
  };

  return (
    <div className="logginpage">
      <h1 className="log-title">Login Page</h1>
      <form onSubmit={handleSubmit}>
        <label className="label">
          Name: <input className="login-input" name="username" />
        </label>
        <button className="login-btn" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};
export default LoginPage;
