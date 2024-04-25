import { useEffect, useState } from "react";

const useValidation = (value, validations) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [minLengthError, setMinLenthError] = useState(false);
  const [maxLengthError, setMaxLenthError] = useState(false);
  const [isEmailError, setIsEmailError] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "isEmpty":
          if (value) {
            setIsEmpty(false);
          } else {
            setIsEmpty(true);
            setErrorMessage("Поле не может быть пустым");
          }
          break;
        case "minLength":
          if (value.length < validations[validation]) {
            setMinLenthError(true);
            setErrorMessage("Слишком короткий");
          } else {
            setMinLenthError(false);
          }
          break;
        case "maxLength":
          if (value.length > validations[validation]) {
            setMaxLenthError(true);
            setErrorMessage("Слишком длинный");
          } else {
            setMaxLenthError(false);
          }
          break;
        case "isEmail": {
          const re = /^[A-Za-z0-9._]+@[A-Za-z0-9-]+[.][A-Za-z]{2,4}$/;
          if (re.test(String(value).toLowerCase())) {
            setIsEmailError(false);
          } else {
            setIsEmailError(true);
            setErrorMessage("Это не email");
          }
        }
        break;
        default:
          setErrorMessage("");
          break;
      }
    }
  }, [value]);

  return { isEmpty, minLengthError, maxLengthError, isEmailError, errorMessage };
};

export default useValidation;
