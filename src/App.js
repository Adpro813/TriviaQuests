import LoginScreen from "./screens/LoginScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupScreen from "./screens/SignupScreen";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginScreen />} />
        <Route path="/register" element={<SignupScreen />} />
      </Routes>
    </Router>
  );
}

export default App;
