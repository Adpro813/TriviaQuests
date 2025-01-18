import "./styles/LoginScreen.css";
import { FaEye } from "react-icons/fa";
// import useRoute from "react-router-dom";
function LoginScreen() {
//   const navigate = useRoute();
  return (
    <div className="login-screen-container">
      <div className="header">
        <img src="/logo.png" alt="TriviaQuests Logo" className="logo" />
      </div>

      <div className="login-form-container">
        <div className="login-form">
          <div className="login-provider">
            {/*  signing in with google goes here*/}
          </div>
          <div className="form-fields">
            <input type="email" placeholder="Email" className="login-input" />
            <div className="password-container">
              <input
                type="password"
                placeholder="Password"
                className="login-input"
              />
              <button className="show-password-btn">
                <FaEye />
              </button>
            </div>
            <button className="sign-in-btn">Sign In</button>
            <a href="#" className="signup">
              Sign Up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
