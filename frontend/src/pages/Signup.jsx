import { useSignup } from "../hooks/useSignup.jsx";
import { useSelector } from "react-redux";
import { useInput } from "../hooks/useInput.jsx";
import Button from "../components/elements/Button.jsx";
import Anchor from "../components/elements/Anchor.jsx";
import Input from "../components/elements/Input.jsx";

const Signup = () => {
  const email = useInput("", {
    isEmail: true,
    minLength: 6,
    maxLength: 30,
    isEmpty: true,
  });
  const password = useInput("", { maxLength: 30, minLength: 6, isEmpty: true });
  const name = useInput("", {
    isName: true,
    maxLength: 30,
    minLength: 2,
    isEmpty: true,
  });
  const instagramNickname = useInput("", {
    maxLength: 30,
    minLength: 1,
    isEmpty: true,
  });
  const phoneNumber = useInput("", {
    maxLength: 13,
    minLength: 13,
    isEmpty: true,
  });
  const { signup, error } = useSignup();
  const isLoaded = useSelector((state) => state.isLoaded.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);
    const contacts = {
      instagramNickname,
      phoneNumber,
    };
    payload.contacts = contacts;
    await signup(payload);
  };

  return (
    <form
      className="flex w-80 flex-col items-center gap-5 md:items-start"
      onSubmit={handleSubmit}
    >
      <Input
        htmlFor={"name"}
        disabled={!isLoaded}
        type={"name"}
        placeholder={"Имя"}
        autoComplete={"given-name"}
        onChange={(e) => name.onChange(e)}
        onBlur={(e) => name.onBlur(e)}
        value={name.value}
        id={"name"}
        name={"name"}
        style={
          name.isDirty &&
          (name.isEmpty ||
            name.minLengthError ||
            name.maxLengthError ||
            name.isNameError) &&
          "focus:outline-error/50 focus:outline-2 outline outline-2 outline-error/50"
        }
        required
      >
        Имя
      </Input>
      {name.isDirty &&
        (name.isEmpty ||
          name.minLengthError ||
          name.maxLengthError ||
          name.isNameError) && (
          <div className="text-xs text-error">{name.errorMessage}</div>
        )}
      <Input
        htmlFor={"instagramNickname"}
        disabled={!isLoaded}
        type={"instagramNickname"}
        placeholder={"Instagram"}
        onChange={(e) => instagramNickname.onChange(e)}
        onBlur={(e) => instagramNickname.onBlur(e)}
        value={instagramNickname.value}
        id={"instagramNickname"}
        name={"instagramNickname"}
        style={
          instagramNickname.isDirty &&
          (instagramNickname.isEmpty || instagramNickname.maxLengthError) &&
          "focus:outline-error/50 focus:outline-2 outline outline-2 outline-error/50"
        }
        required
      >
        Instagram
      </Input>
      {instagramNickname.isDirty &&
        (instagramNickname.isEmpty ||
          instagramNickname.minLengthError ||
          instagramNickname.maxLengthError) && (
          <div className="text-xs text-error">
            {instagramNickname.errorMessage}
          </div>
        )}
      <Input
        htmlFor={"phoneNumber"}
        disabled={!isLoaded}
        type={"phoneNumber"}
        placeholder={"+375292528440"}
        onChange={(e) => phoneNumber.onChange(e)}
        onBlur={(e) => phoneNumber.onBlur(e)}
        value={phoneNumber.value}
        id={"phoneNumber"}
        name={"phoneNumber"}
        style={
          phoneNumber.isDirty &&
          (phoneNumber.isEmpty ||
            phoneNumber.minLengthError ||
            phoneNumber.maxLengthError) &&
          "focus:outline-error/50 focus:outline-2 outline outline-2 outline-error/50"
        }
        required
      >
        Номер телефона
      </Input>
      {phoneNumber.isDirty &&
        (phoneNumber.isEmpty ||
          phoneNumber.minLengthError ||
          phoneNumber.maxLengthError) && (
          <div className="text-xs text-error">{phoneNumber.errorMessage}</div>
        )}
      <Input
        htmlFor={"email"}
        disabled={!isLoaded}
        type={"email"}
        placeholder={"example@email.com"}
        autoComplete={"email"}
        onChange={(e) => email.onChange(e)}
        onBlur={(e) => email.onBlur(e)}
        value={email.value}
        id={"email"}
        name={"email"}
        style={
          email.isDirty &&
          (email.isEmpty ||
            email.minLengthError ||
            email.maxLengthError ||
            email.isEmailError) &&
          "focus:outline-error/50 focus:outline-2 outline outline-2 outline-error/50"
        }
        required
      >
        Email
      </Input>
      {email.isDirty &&
        (email.isEmpty ||
          email.minLengthError ||
          email.maxLengthError ||
          email.isEmailError) && (
          <div className="text-xs text-error">{email.errorMessage}</div>
        )}
      <Input
        htmlFor={"password"}
        disabled={!isLoaded}
        type={"password"}
        placeholder={"••••••"}
        autoComplete={"current-password"}
        onChange={(e) => password.onChange(e)}
        onBlur={(e) => password.onBlur(e)}
        value={password.value}
        id={"password"}
        name={"password"}
        style={
          password.isDirty &&
          (password.isEmpty ||
            password.minLengthError ||
            password.maxLengthError) &&
          "focus:outline-error/50 focus:outline-2 outline outline-2 outline-error/50"
        }
        required
      >
        Пароль
      </Input>
      {password.isDirty &&
        (password.isEmpty ||
          password.minLengthError ||
          password.maxLengthError) && (
          <div className="text-xs text-error">{password.errorMessage}</div>
        )}
      <div className="flex w-9/12 justify-between md:w-80">
        <Button
          disabled={
            !isLoaded ||
            name.isEmpty ||
            name.minLengthError ||
            name.maxLengthError ||
            name.isNameError ||
            email.isEmpty ||
            email.minLengthError ||
            email.maxLengthError ||
            email.isEmailError ||
            instagramNickname.isEmpty ||
            instagramNickname.minLengthError ||
            instagramNickname.maxLengthError ||
            phoneNumber.isEmpty ||
            phoneNumber.minLengthError ||
            phoneNumber.maxLengthError ||
            password.isEmpty ||
            password.minLengthError ||
            password.maxLengthError
          }
        >
          Регистрация
        </Button>
        <Anchor to={"/login"}>Вход</Anchor>
      </div>
      {error && <p className="text-xs text-error">Не корректнае данные</p>}
    </form>
  );
};

export default Signup;
