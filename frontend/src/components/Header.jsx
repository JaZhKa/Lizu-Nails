import Logo from "./elements/Logo";
import Burger from "./elements/Burger-menu";
import Anchor from "./elements/Anchor";
import { useAuthContext } from "./../hooks/useAuthContext";

const Header = () => {
  const { user } = useAuthContext();

  return (
    <>
      <header className="sticky top-0 z-50 flex w-full flex-wrap items-center justify-between bg-secondary/30 backdrop-blur-sm transition-all duration-300 ease-out md:justify-around">
        <Logo />
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            <li>
              <Anchor to={"/"}>Главная</Anchor>
            </li>
            <li>
              <Anchor to={"/gallery"}>Галерея</Anchor>
            </li>
            <li>
              <Anchor to={"/study"}>Обучение</Anchor>
            </li>
            <li>
              <Anchor to={"/about"}>Обо мне</Anchor>
            </li>
            <li>
              {user ? (
                <Anchor to={"/account"}>Профиль</Anchor>
              ) : (
                <Anchor to={"/login"}>Вход</Anchor>
              )}
            </li>
          </ul>
        </nav>
        <Burger />
      </header>
    </>
  );
};

export default Header;
