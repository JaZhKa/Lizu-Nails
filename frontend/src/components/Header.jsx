import Logo from "./elements/Logo";
import Burger from "./elements/Burger-menu";
import Anchor from "./elements/Anchor";
import { useAuthContext } from "./../hooks/useAuthContext";
import { useLogout } from "./../hooks/useLogout";

const Header = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const handlerLogout = () => {
    logout();
  };
  return (
    <>
      <header className="sticky top-0 flex w-full flex-wrap items-center justify-between bg-secondary/30 backdrop-blur-sm transition-all duration-300 ease-out md:justify-around">
        <Logo />
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            <li>
              <Anchor to={"/"}>Главная</Anchor>
            </li>
            <li>
              <Anchor to={"/study"}>Обучение</Anchor>
            </li>
            <li>
              <Anchor to={"/gallery"}>Галерея</Anchor>
            </li>
            <li>
              <Anchor to={"/about"}>О нас</Anchor>
            </li>
            {user ? (
              <button
                className="block w-fit border-text-color py-[2px] text-text-color hover:border-y-2 hover:border-solid hover:py-0 focus:border-y-2 focus:border-solid focus:py-0"
                onClick={handlerLogout}
              >
                Выход
              </button>
            ) : (
              <Anchor to={"/login"}>Вход</Anchor>
            )}
          </ul>
        </nav>
        <Burger />
      </header>
    </>
  );
};

export default Header;
