import "./styles/LoginScreen.css";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";

function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [passwordText, setPasswordText] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  useEffect(() => {
    if (showPassword === true) setPasswordText("text");
    else setPasswordText("password");
  }, [showPassword]);

  function loginWithPopup() {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        navigate('/home')
      })
      .catch((error) => {
        console.error("Google login error:", error);
      });
  }

  function handleLogin(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Logged in with email:", user);
      })
      .catch((error) => {
        console.error("Login error:", error);
        alert(error.message);
      });
  }

  return (
    <div className="login-screen-container">
      <div className="header">
        <img src="/logo.png" alt="TriviaQuests Logo" className="logo" />
      </div>
      <div className="login-form-container">
        <div className="login-form">
          <div className="login-provider">
            <div className="google-button">
              <GoogleButton onClick={loginWithPopup} />
            </div>
          </div>
          <div className="divider">
            <span>or</span>
          </div>
          <form className="form-fields" onSubmit={handleLogin}>
            <input 
              type="email" 
              placeholder="Email" 
              className="login-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
            />
            <div className="password-container">
              <input
                type={passwordText}
                placeholder="Password"
                className="login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button 
                type="button"
                className="show-password-btn"
                onClick={() => setShowPassword(!showPassword)}
              >
                <FaEye />
              </button>
            </div>
            <button type="submit" className="sign-in-btn">Sign In</button>
            <Link to="/register" className="signup">
              Sign Up
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
