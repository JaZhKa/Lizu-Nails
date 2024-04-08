import Options from "./Options";

const Select = ({ ...props }) => {
  return (
    <>
      <label htmlFor={props.htmlFor} className="text-text-color">
        {props.children}
      </label>
      <select
        className="h-10 w-9/12 bg-secondary/50 px-2 text-text-color focus:outline-secondary disabled:text-secondary md:w-full"
        name={props.name}
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        disabled={props.disabled}
        required={props.required}
      >
        <option hidden value={""}>
          {props.hidOption}
        </option>
        <Options
          option={props.option}
          valueKey={props.valueKey}
          textKey={props.textKey}
        />
      </select>
    </>
  );
};

export default Select;
