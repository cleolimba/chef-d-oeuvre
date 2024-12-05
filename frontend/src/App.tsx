import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingPage from './Composants/pages/LoadingPage';
import LoginPage from './Composants/pages/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/connexion" element={<LoginPage />} />
      </Routes>
    </Router>
  );
}

export default App;
