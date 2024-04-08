import { useState } from "react";
import { useSignup } from "../hooks/useSignup.jsx";
import { useSelector } from "react-redux";
import Button from "../components/elements/Button.jsx";
import Anchor from "../components/elements/Anchor.jsx";
import Input from "../components/elements/Input.jsx";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [instagramNickname, setInstagramNickname] = useState("");
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
        onChange={(e) => setName(e.target.value)}
        value={name}
        id={"name"}
        name={"name"}
        required
      >
        Имя
      </Input>
      <Input
        htmlFor={"instagramNickname"}
        disabled={!isLoaded}
        onChange={(e) => setInstagramNickname(e.target.value)}
        value={instagramNickname}
        id={"instagramNickname"}
        name={"instagramNickname"}
      >
        Instagram
      </Input>
      <Input
        htmlFor={"phoneNumber"}
        disabled={!isLoaded}
        type={"phoneNumber"}
        onChange={(e) => setPhoneNumber(e.target.value)}
        value={phoneNumber}
        id={"phoneNumber"}
        name={"phoneNumber"}
      >
        Номер телефона
      </Input>
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
        <Button disabled={!isLoaded}>Регистрация</Button>
        <Anchor to={"/login"}>Вход</Anchor>
      </div>
      {error && <p className="text-xs text-error">{error}</p>}
    </form>
  );
};

export default Signup;
