export default function Button({
  children,
  onClick,
  type = 'button',
  disabled = false,
  className = '',
  variant = 'primary',
}) {
  const baseStyles = 'px-4 py-2 rounded-lg font-semibold transition-colors duration-200 cursor-pointer';
  
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white disabled:bg-gray-400',
    secondary: 'bg-gray-300 hover:bg-gray-400 text-gray-800 disabled:bg-gray-200',
    danger: 'bg-red-600 hover:bg-red-700 text-white disabled:bg-red-400',
    success: 'bg-green-600 hover:bg-green-700 text-white disabled:bg-green-400',
  };

  const buttonStyles = `${baseStyles} ${variants[variant]} ${className}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={buttonStyles}
    >
      {children}
    </button>
  );
}
