import React, { useState } from "react";
import "./Login.css";

const App = () => {
  const [isLogin, setIsLogin] = useState(true); // Toggle between Login and Register

  return (
    <div className="app-container">
      <div className="form-container">
        {/* Left Section */}
        <div className="left-section">
          {isLogin ? (
            <>
              <h2>Welcome Back!</h2>
              <p>To keep connected with us please login with your personal info</p>
              <button className="toggle-button" onClick={() => setIsLogin(false)}>
                Sign Up
              </button>
            </>
          ) : (
            <>
              <h2>Welcome Back!</h2>
              <p>If you already have an account, login with your details</p>
              <button className="toggle-button" onClick={() => setIsLogin(true)}>
                Sign In
              </button>
            </>
          )}
        </div>

        {/* Right Section */}
        <div className="right-section">
          {isLogin ? (
            <LoginForm />
          ) : (
            <RegisterForm />
          )}
        </div>
      </div>
    </div>
  );
};

const LoginForm = () => {
  return (
    <>
      <h2>Login</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign In</button>
      </form>
    </>
  );
};

const RegisterForm = () => {
  return (
    <>
      <h2>Create Account</h2>
      <div className="social-buttons">
        <button>F</button>
        <button>G+</button>
        <button>in</button>
      </div>
      <p>or use your email for registration:</p>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};

export default App;

