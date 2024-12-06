import { useNavigate } from "react-router-dom"; // Pour naviguer entre les pages
import Button from "../Components/Button";
import Form from "../Components/Form";
import HeaderG from "../Components/HeaderG";

const SignupPage = () => {
  const navigate = useNavigate();

  // Fonction de validation (simulée pour cet exemple)
  const validateForm = () => {
    // Ajoutez ici votre logique de validation
    return true; // Simule une validation réussie
  };

  const handleSignup = () => {
    if (validateForm()) {
      console.log("Inscription réussie");
      navigate("/connexion"); // Redirige vers la page de connexion
    } else {
      console.log("Validation échouée");
    }
  };

  return (
    <div className="min-h-screen bg-black">
      <HeaderG />
      <main className="container mx-auto px-4">
        <h1 className="text-white text-4xl font-light text-center mt-24 font-abhaya">
          S'INSCRIRE
        </h1>
        <Form />
        <div className="flex justify-center mt-20">
          <Button
            label="S'inscrire"
            onClick={handleSignup} // Passe simplement la fonction handleSignup
            variant="primary"
          />
        </div>
      </main>
    </div>
  );
};

export default SignupPage;
