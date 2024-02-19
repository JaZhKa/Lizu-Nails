const Button = ({ heandler, children }) => {
  return (
    <button
      onClick={heandler}
      className="bg-gray px-4 py-1 text-gray-light transition-all duration-100 hover:bg-pink hover:text-gray-dark focus:bg-pink focus:text-gray-dark active:scale-90"
    >
      {children}
    </button>
  );
};

export default Button;
