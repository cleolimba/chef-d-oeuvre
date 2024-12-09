import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingPage from './Composants/pages/LoadingPage';
import LoginPage from './Composants/pages/LoginPage';
import SignupPage from './Composants/pages/Signup';
import ClientRegistrationPage from './Composants/pages/ClientRegistrationPage';
import CamionPage from "../src/Composants/pages/CamionPage";
import Caillasses from './Composants/pages/Caillasses';
import EnregistrementCommande from './Composants/pages/EnregistrementCommande';
import BonDeLivraison from './Composants/pages/BonDeLivraison';
import RecuDeCaisse from './Composants/pages/RecuDeCaisse';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoadingPage />} />
        <Route path="/connexion" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/client" element={<ClientRegistrationPage />} />
        <Route path="/camion" element={<CamionPage />} />
        <Route path="/caillasse" element={<Caillasses />} />
        <Route path="/commande" element={<EnregistrementCommande />} />
        <Route path="/BonDeLivraison" element={<BonDeLivraison />} />
        <Route path="/caisse" element={<RecuDeCaisse />} />
      </Routes>
    </Router>
  );
}

export default App;
