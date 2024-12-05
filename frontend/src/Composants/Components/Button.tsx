import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
  variant: 'primary' | 'secondary';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, variant }) => {
  const baseStyle = "w-full p-2 rounded text-white font-medium";
  const styles = {
    primary: "bg-blue-600 hover:bg-blue-700",
    secondary: "bg-gray-600 hover:bg-gray-700",
  };
  return (
    <button onClick={onClick} className={`${baseStyle} ${styles[variant]}`}>
      {label}
    </button>
  );
};

export default Button;
