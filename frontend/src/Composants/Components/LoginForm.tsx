import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState(""); // État pour gérer les erreurs
  const navigate = useNavigate();

  const validateForm = () => {
    if (!email.trim() || !password.trim()) {
      setError("Tous les champs doivent être remplis.");
      return false;
    }
    setError(""); // Réinitialiser l'erreur si tout est correct
    return true;
  };

  const handleLogin = () => {
    if (validateForm()) {
      navigate("/dashboard");
    }
  };

  const handleSignup = () => {
    if (validateForm()) {
      navigate("/signup");
    }
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
          value={email}
          onChange={(e) => setEmail(e.target.value)} // Mettre à jour l'état
          className="w-96 mt-2 p-2 rounded bg-gray-700 text-white"
        />
      </div>
      <div className="mb-6 relative">
        <label htmlFor="password" className="block text-lg font-medium text-gray-300 font-abhaya">
          Mot de passe
        </label>
        <div className="relative w-96 mt-2">
          <input
            type={passwordVisible ? "text" : "password"}
            id="password"
            placeholder="Votre mot de passe"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Mettre à jour l'état
            className="w-full p-2 rounded bg-gray-700 text-white pr-10"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-3 flex items-center text-blue-800 hover:text-blue-600">
            <FontAwesomeIcon icon={passwordVisible ? faEyeSlash : faEye} />
          </button>
        </div>
      </div>
      {error && (
        <div className="mb-4 text-red-500 text-sm">
          {error}
        </div>
      )}
      <div className="flex justify-between items-center mb-4 ml-4 pr-20">
        <div>
          <input type="checkbox" id="remember" />
          <label htmlFor="remember" className="ml-2 text-sm">Souviens-toi de moi</label>
        </div>
        <a href="#" className="text-sm text-blue-500">Mot de passe oublié</a>
      </div>
      <div className="flex flex-grow gap-8 mt-8 mb-8">
        <Button label="Connectez-vous" onClick={handleLogin} variant="primary" />
        <Button label="S'inscrire" onClick={handleSignup} variant="secondary" />
      </div>
    </form>
  );
};

export default LoginForm;
