const Button = ({ onClick, children, disabled, style }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={style + " disabled:bg-secondary disabled:text-text-color bg-primary px-8 py-1 text-secondary transition-all duration-100 hover:bg-accent hover:text-text-color focus:bg-accent focus:text-text-color active:scale-90"}
    >
      {children}
    </button>
  );
};

export default Button;
