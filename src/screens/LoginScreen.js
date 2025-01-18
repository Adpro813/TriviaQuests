import "./styles/LoginScreen.css";

function LoginScreen() {
  return (
    <div className="login-screen-container">
      <div className="header">
        <img src="/logo.png" alt="TriviaQuests Logo" className="logo" />
      </div>

      <div className="login-form-container">
        <div className="login-form">
          <div className="form-fields">
            <input 
              type="email" 
              placeholder="Email" 
              className="login-input"
            />
            <div className="password-container">
              <input 
                type="password" 
                placeholder="Password" 
                className="login-input"
              />
              <button className="show-password-btn">
                👁️
              </button>
            </div>
            <button className="sign-in-btn">Sign In</button>
            <a href="#" className="forgot-password">Forgot password?</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
