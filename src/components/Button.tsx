import "../index.css";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button
      className={`bg-blue-500 text-white p-2 rounded-md`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
