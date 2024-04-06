import { useState } from "react";
import { useSignup } from "../hooks/useSignup.jsx";
import { useSelector } from "react-redux";
import Button from "../components/elements/Button.jsx";
import Anchor from "../components/elements/Anchor.jsx";

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
      <label htmlFor="name" className="text-text-color">
        Имя
      </label>
      <input
        disabled={!isLoaded}
        className="h-10 w-9/12 bg-secondary/50 px-2 text-text-color focus:outline-secondary disabled:text-secondary md:w-full"
        type="text"
        onChange={(e) => setName(e.target.value)}
        value={name}
        id="name"
        name="name"
        required
      />
      <label htmlFor="instagramNickname" className="text-text-color">
        Instagram
      </label>
      <input
        type="text"
        disabled={!isLoaded}
        className="h-10 w-9/12 bg-secondary/50 px-2 text-text-color focus:outline-secondary disabled:text-secondary md:w-full"
        onChange={(e) => setInstagramNickname(e.target.value)}
        value={instagramNickname}
        id="instagramNickname"
        name="instagramNickname"
      />
      <label htmlFor="phoneNumber" className="text-text-color">
        Номер телефона
      </label>
      <input
        type="tel"
        disabled={!isLoaded}
        className="h-10 w-9/12 bg-secondary/50 px-2 text-text-color focus:outline-secondary disabled:text-secondary md:w-full"
        onChange={(e) => setPhoneNumber(e.target.value)}
        value={phoneNumber}
        id="phoneNumber"
        name="phoneNumber"
      />
      <label htmlFor="email" className="text-text-color">
        Email
      </label>
      <input
        disabled={!isLoaded}
        className="h-10 w-9/12 bg-secondary/50 px-2 text-text-color focus:outline-secondary disabled:text-secondary md:w-full"
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        id="email"
        name="email"
        required
      />
      <label htmlFor="password" className="text-text-color">
        Пароль
      </label>
      <input
        disabled={!isLoaded}
        className="h-10 w-9/12 bg-secondary/50 px-2 text-text-color focus:outline-secondary disabled:text-secondary md:w-full"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        id="password"
        name="password"
        required
      />
      <div className="flex w-9/12 justify-between md:w-80">
        <Button disabled={!isLoaded}>Регистрация</Button>
        <Anchor to={"/login"}>Вход</Anchor>
      </div>
      {error && <p className="text-xs text-error">{error}</p>}
    </form>
  );
};

export default Signup;
