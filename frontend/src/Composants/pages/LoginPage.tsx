import WelcomeSection from '../Components/WelcomeSection';
import LoginForm from '../Components/LoginForm';
import Header from '../Components/Header';

const LoginPage = () => (
  <div className="min-h-screen bg-black text-white flex flex-col">
    <Header />

    {/* Contenu principal divisé en deux sections */}
    <div className="flex flex-col lg:flex-row items-center justify-between w-full h-screen bg-black text-white">
        <div className="lg:w-1/2 flex flex-col justify-center items-center text-center p-8">
        <WelcomeSection />
        
        {/* Icônes des réseaux sociaux */}
      </div>

      {/* Section de connexion */}
      <div className="flex-1 flex flex-col justify-center items-center px-8 md:px-16">
        <div className="w-full max-w-md">
          <h2 className="text-3xl font-semibold mb-6">Se connecte</h2>
          <LoginForm />
          <p className="mt-4 text-xs text-center text-gray-400">
            En cliquant sur "Se connecter", vous acceptez les <a href="#" className="text-blue-500">Conditions d'utilisation</a> | <a href="#" className="text-blue-500">Politique de confidentialité</a>.
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default LoginPage;
