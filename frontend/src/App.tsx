import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingPage from './Composants/pages/LoadingPage';
import LoginPage from './Composants/pages/LoginPage';
import SignupPage from './Composants/pages/Signup';
import ClientRegistrationPage from './Composants/pages/ClientRegistrationPage';
import CamionPage from "../src/Composants/pages/CamionPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/connexion" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/client" element={<ClientRegistrationPage />} />
        <Route path="/camion" element={<CamionPage />} />
      </Routes>
    </Router>
  );
}

export default App;
