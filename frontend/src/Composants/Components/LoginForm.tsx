import { useState } from 'react';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const LoginForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const handleLogin = () => {
    console.log("Login");
  };

  const handleSignup = () => {
    console.log("Signup");
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <form>
      <div className="mb-4">
        <label htmlFor="email" className="block text-lg font-medium text-gray-300 font-abhaya">
          Adresse e-mail
        </label>
        <input
          type="email"
          id="email"
          placeholder="Votre adresse mail"
          className="w-96 mt-2 p-2 rounded bg-gray-700 text-white"
        />
      </div>
      <div className="mb-6 relative">
        <label htmlFor="password" className="block text-lg font-medium text-gray-300 font-abhaya">
          Mot de passe
        </label>

        {/* Container relatif pour positionner le bouton */}
        <div className="relative w-96 mt-2">
          <input
            type={passwordVisible ? "text" : "password"}
            id="password"
            className="w-full p-2 rounded bg-gray-700 text-white pr-10"/>
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-3 flex items-center text-blue-800 hover:text-blue-600"
          >
            <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
          </button>
        </div>
      </div>
      <div className="flex justify-between items-center mb-4 ml-4 pr-20">
        <div>
          <input type="checkbox" id="remember" />
          <label htmlFor="remember" className="ml-2 text-sm">Souviens-toi de moi</label>
        </div>
        <a href="#" className="text-sm text-blue-500">Mot de passe oublié</a>
      </div>
      <div className='flex flex-grow gap-8 mt-8 mb-8'>
        <Button label="Connectez-vous" onClick={handleLogin} variant="primary" />
        <Button label="S'inscrire" onClick={handleSignup} variant="secondary" />
      </div>
      
    </form>
  );
};

export default LoginForm;
