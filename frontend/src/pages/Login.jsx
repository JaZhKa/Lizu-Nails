import { useState } from "react";
import { useLogin } from "../hooks/useLogin.jsx";
import { useSelector } from "react-redux";
import Button from "./../components/elements/Button.jsx";
import Anchor from "../components/elements/Anchor.jsx";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error } = useLogin();
  const isLoaded = useSelector((state) => state.isLoaded.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <form
      className="flex w-80 flex-col items-center gap-5 md:items-start"
      onSubmit={handleSubmit}
    >
      <label htmlFor="login-email" className="text-text-color">
        Email
      </label>
      <input
        disabled={!isLoaded}
        className="disabled:text-secondary text-text-color focus:outline-secondary bg-secondary/50 h-10 w-9/12 px-2 md:w-full"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        id="login-email"
      />
      <label htmlFor="login-password" className="text-text-color">
        Пароль
      </label>
      <input
        disabled={!isLoaded}
        className="disabled:text-secondary text-text-color focus:outline-secondary bg-secondary/50 h-10 w-9/12 px-2 md:w-full"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        id="login-password"
      />
      <div className="flex justify-between w-9/12 md:w-80">
        <Button disabled={!isLoaded}>Войти</Button>
        <Anchor to={"/signup"}>Регистрация</Anchor>
      </div>
      {error && <p className="text-error text-xs">{error}</p>}
    </form>
  );
};

export default Login;
