import { useLogin } from "../hooks/useLogin.jsx";
import { useSelector } from "react-redux";
import { useInput } from "../hooks/useInput.jsx";
import Button from "./../components/elements/Button.jsx";
import Anchor from "../components/elements/Anchor.jsx";
import Input from "../components/elements/Input.jsx";

const Login = () => {
  const email = useInput("", {
    isEmail: true,
    minLength: 6,
    maxLength: 30,
    isEmpty: true,
  });
  const password = useInput("", { maxLength: 30, minLength: 6, isEmpty: true });
  const { login, error } = useLogin();
  const isLoaded = useSelector((state) => state.isLoaded.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData);
    await login(payload);
  };

  return (
    <form
      className="flex w-80 flex-col items-center gap-5 md:items-start"
      onSubmit={handleSubmit}
    >
      <Input
        htmlFor={"email"}
        disabled={!isLoaded}
        type={"email"}
        placeholder={"example@email.com"}
        autoComplete={"username"}
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
            email.minLengthError ||
            password.minLengthError ||
            email.maxLengthError ||
            password.maxLengthError
          }
        >
          Войти
        </Button>
        <Anchor to={"/signup"}>Регистрация</Anchor>
      </div>
      {error && <p className="text-xs text-error">{error}</p>}
    </form>
  );
};

export default Login;
