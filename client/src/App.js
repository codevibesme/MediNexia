import SignupPage from "./scenes/SignupPage.jsx";
import LoginPage from "./scenes/LoginPage.jsx";
import ProfilePage from "./scenes/ProfilePage.jsx";
import ProfileEditPage from "./scenes/ProfileEditPage.jsx";
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import { useSelector } from "react-redux";
function App() {
  const isLoggedIn = useSelector((state)=>state.isLoggedIn);
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route exact path="/" element={<SignupPage />} />
          <Route exact path="/profile/:userId" element={isLoggedIn? <ProfilePage/>: <Navigate to="/login" />} />
          <Route exact path="/profile/:userId/edit" element={isLoggedIn? <ProfileEditPage/>: <Navigate to="/login" />} />
          <Route exact path="/login" element={<LoginPage />} />
        </Routes>
      </Router>
    </div>

  );
}

export default App;
