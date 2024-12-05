import Button from './Button';

const LoginForm = () => {
  const handleLogin = () => {
    console.log("Login");
  };

  const handleSignup = () => {
    console.log("Signup");
  };

  return (
    <form>
      <div className="mb-4">
        <label htmlFor="email" className="block text-sm font-medium text-gray-300">
          Adresse e-mail
        </label>
        <input
          type="email"
          id="email"
          placeholder="Votre adresse mail"
          className="w-full mt-2 p-2 rounded bg-gray-700 text-white"
        />
      </div>
      <div className="mb-6">
        <label htmlFor="password" className="block text-sm font-medium text-gray-300">
          Mot de passe
        </label>
        <input
          type="password"
          id="password"
          className="w-full mt-2 p-2 rounded bg-gray-700 text-white"
        />
      </div>
      <div className="flex justify-between items-center mb-4">
        <div>
          <input type="checkbox" id="remember" />
          <label htmlFor="remember" className="ml-2 text-sm">Souviens-toi de moi</label>
        </div>
        <a href="#" className="text-sm text-blue-500">Mot de passe oublié</a>
      </div>
      <Button label="Connectez-vous" onClick={handleLogin} variant="primary" />
      <div className="mt-4">
        <Button label="S'inscrire" onClick={handleSignup} variant="secondary" />
      </div>
    </form>
  );
};

export default LoginForm;
