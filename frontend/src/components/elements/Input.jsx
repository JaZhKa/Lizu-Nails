const Input = ({ ...props }) => {
  return (
    <>
      <label htmlFor={props.htmlFor} className="text-text-color">
        {props.children}
      </label>
      <input
        disabled={props.disabled}
        className={
          props.style +
          " h-10 w-9/12 bg-secondary/50 px-2 text-text-color transition-all duration-100 focus:outline-secondary disabled:text-secondary md:w-full"
        }
        type={props.type}
        autoComplete={props.autoComplete}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
        id={props.id}
        name={props.id}
        placeholder={props.placeholder}
        required={props.required}
      />
    </>
  );
};
export default Input;
