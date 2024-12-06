import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingPage from './Composants/pages/LoadingPage';
import LoginPage from './Composants/pages/LoginPage';
import SignupPage from './Composants/pages/Signup';
import Dashboard from './Composants/pages/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/connexion" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
