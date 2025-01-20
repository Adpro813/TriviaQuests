import "./styles/SignupScreen.css";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate} from "react-router-dom";
import GoogleButton from "react-google-button";
import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";
function SignupScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [passwordText, setPasswordText] = useState("password");
  const [confirmPasswordText, setConfirmPasswordText] = useState("password");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const provider = new GoogleAuthProvider();
  const auth = getAuth();

  useEffect(() => {
    setPasswordText(showPassword ? "text" : "password");
  }, [showPassword]);

  useEffect(() => {
    setConfirmPasswordText(showConfirmPassword ? "text" : "password");
  }, [showConfirmPassword]);

  function signupWithGoogle() {
    signInWithPopup(auth, provider)
      .then((result) => {
        // Handle successful signup
        const user = result.user;
        navigate('/')
      })
      .catch((error) => {
        // Handle errors
        console.error("Google signup error:", error);
      });
  }

  function handleSignup(e) {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Handle successful signup
        const user = userCredential.user;
        console.log("Signed up with email:", user);
      })
      .catch((error) => {
        // Handle errors
        console.error("Signup error:", error);
        alert(error.message);
      });
  }

  return (
    <div className="signup-screen-container">
      <div className="header">
        <img src="/logo.png" alt="TriviaQuests Logo" className="logo" />
      </div>

      <div className="signup-form-container">
        <div className="signup-form">
          <div className="signup-provider">
            <div className="google-button">
              <GoogleButton onClick={signupWithGoogle} />
            </div>
          </div>
          
          <div className="divider">
            <span>or</span>
          </div>

          <form className="form-fields" onSubmit={handleSignup}>
            <input 
              type="email" 
              placeholder="Email" 
              className="signup-input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <div className="password-container">
              <input
                type={passwordText}
                placeholder="Password"
                className="signup-input"
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
            <div className="password-container">
              <input
                type={confirmPasswordText}
                placeholder="Confirm Password"
                className="signup-input"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
              <button 
                type="button"
                className="show-password-btn"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                <FaEye />
              </button>
            </div>
            <button type="submit" className="sign-up-btn">Sign Up</button>
            <Link to="/" className="login-link">
              Already have an account? Log in
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignupScreen;
