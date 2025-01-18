import "./styles/SignupScreen.css";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
function SignupScreen() {
  return (
    <div className="signup-screen-container">
      <div className="header">
        <img src="/logo.png" alt="TriviaQuests Logo" className="logo" />
      </div>

      <div className="signup-form-container">
        <div className="signup-form">
          <div className="signup-provider">
            {/* Google signup button will go here */}
          </div>
          
          <div className="divider">
            <span>or</span>
          </div>

          <div className="form-fields">
            <input 
              type="email" 
              placeholder="Email" 
              className="signup-input" 
            />
            <div className="password-container">
              <input
                type="password"
                placeholder="Password"
                className="signup-input"
              />
              <button className="show-password-btn">
                <FaEye />
              </button>
            </div>
            <div className="password-container">
              <input
                type="password"
                placeholder="Confirm Password"
                className="signup-input"
              />
              <button className="show-password-btn">
                <FaEye />
              </button>
            </div>
            <button className="sign-up-btn">Sign Up</button>
            <Link to="/" className="login-link">
              Already have an account? Log in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignupScreen;
