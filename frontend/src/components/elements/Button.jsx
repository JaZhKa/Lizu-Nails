const Button = ({ heandler, children }) => {
  return (
    <button
      onClick={heandler}
      className="bg-primary px-4 py-1 text-secondary transition-all duration-100 hover:bg-accent hover:text-text-color focus:bg-accent focus:text-text-color active:scale-90"
    >
      {children}
    </button>
  );
};

export default Button;
