const Options = ({ ...props }) => {
  return (
    props.option &&
    props.option.map((item) => (
      <option key={item[props.valueKey]} value={item[props.valueKey]}>
        {item[props.textKey]}
      </option>
    ))
  );
};

export default Options;
