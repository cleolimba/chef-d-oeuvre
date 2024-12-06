import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faRightToBracket, faBars } from "@fortawesome/free-solid-svg-icons";

const HeaderG = () => {
  return (
    <>
        <header className="bg-black text-white flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center">
            <img
            src="/logo/logo2 1.png" // Remplacez par le chemin réel de votre logo
            alt="Logo Gravisell"
            className="h-12 mr-4"
            />
        </div>

        {/* Recherche et Boutons */}
        <div className="flex items-center gap-6">
            {/* Icône de recherche */}
            <button className="text-white hover:text-gray-300">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="h-5 w-5" />
            </button>

            {/* Bouton Menu */}
            <button className="flex items-center gap-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700">
            <FontAwesomeIcon icon={faBars} className="h-5 w-5" />
            <span>Menu</span>
            </button>

            {/* Bouton Déconnexion */}
            <button className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-700">
            <FontAwesomeIcon icon={faRightToBracket} className="h-5 w-5" />
            </button>
        </div>
        
    </header>
    <hr className="border-gray-300" />

    </>
    
  );
};

export default HeaderG;
