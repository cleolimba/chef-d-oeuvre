import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoadingPage = () => {
  const [progress, setProgress] = useState(50); // Fixé à 50 pour tester, ajustable
  const navigate = useNavigate();

  useEffect(() => {
    // Simule la progression du chargement
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          navigate('/connexion'); // Redirige vers la page de connexion une fois le chargement terminé
        }
        return prev + 1;
      });
    }, 50); // 50ms pour chaque étape de la progression

    // Nettoyage pour éviter des comportements imprévus
    return () => clearInterval(interval);
  }, [navigate]);

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url(/imgs/imgAccueil.png)' }}
    >
      <div className="absolute top-4 left-4 right-4 bottom-4 rounded-md bg-black opacity-50"></div>

      {/* Conteneur du logo et de la barre de progression */}
      <div className="relative z-10 flex flex-col justify-center items-center h-full px-4">
        {/* Logo réduit */}
        <img
          src="/logo/logo2 1.png"
          alt="Logo"
          className="w-32 sm:w-48 mb-2" // Responsive: petite taille sur mobile, plus grande sur grands écrans
          onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/80')} // Image de secours
        />

        {/* Barre de progression */}
        <div className="w-[80%] max-w-32 sm:w-48 bg-white rounded-full h-4 mb-4">
          <div
            className="h-full bg-blue-500 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingPage;
