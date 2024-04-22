import { useEffect, useState } from "react";

const useValidation = (value, validations) => {
  const [isEmpty, setIsEmpty] = useState(true);
  const [minLengthError, setMinLenthError] = useState(false);
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
            setErrorMessage("Некорректная длина");
          } else {
            setMinLenthError(false);
          }
          break;
        default:
          setErrorMessage("");
          break;
      }
    }
  }, [value]);

  return { isEmpty, minLengthError, errorMessage };
};

export default useValidation;
