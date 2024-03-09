const Button = ({ heandler, children, disabled, style }) => {
  return (
    <button
      onClick={heandler}
      disabled={disabled}
      className={style + " disabled:bg-secondary bg-primary px-8 py-1 text-secondary transition-all duration-100 hover:bg-accent hover:text-text-color focus:bg-accent focus:text-text-color active:scale-90"}
    >
      {children}
    </button>
  );
};

export default Button;
