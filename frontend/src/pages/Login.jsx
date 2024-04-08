import { useState } from "react";
import { useLogin } from "../hooks/useLogin.jsx";
import { useSelector } from "react-redux";
import Button from "./../components/elements/Button.jsx";
import Anchor from "../components/elements/Anchor.jsx";
import Input from "../components/elements/Input.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
        autoComplete={"username"}
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        id={"email"}
        name={"email"}
        required
      >
        Email
      </Input>
      <Input
        htmlFor={"password"}
        disabled={!isLoaded}
        type={"password"}
        autoComplete={"current-password"}
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        id={"password"}
        name={"password"}
        required
      >
        Пароль
      </Input>
      <div className="flex w-9/12 justify-between md:w-80">
        <Button disabled={!isLoaded}>Войти</Button>
        <Anchor to={"/signup"}>Регистрация</Anchor>
      </div>
      {error && <p className="text-xs text-error">{error}</p>}
    </form>
  );
};

export default Login;
