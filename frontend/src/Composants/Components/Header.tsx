import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log('Déconnexion...');
    navigate('/');
  };

  return (
    <div className='pl-10 pr-10 top-5 bottom-5'>
        <header className="w-full flex justify-between items-center p-4 bg-black text-white">
    
            <div className="flex items-center">
                <img
                src="/logo/logo2 1.png"
                alt="GraviSell Logo"
                className="w-16 h-10"
                onError={(e) => (e.currentTarget.src = 'https://via.placeholder.com/80')}
                />
            </div>

            <button
                onClick={handleLogout}
                className="flex items-center text-sm font-medium bg-blue-950 hover:bg-blue-700 text-white px-2 py-2 rounded">
                <FontAwesomeIcon icon={faSignOutAlt} />
            </button>
        </header>
        <hr className="border-gray-300" />

    </div>

  );
};

export default Header;
