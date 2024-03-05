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
      <header className="bg-secondary/30 sticky top-0 flex w-full flex-wrap md:justify-around items-center justify-between backdrop-blur-sm transition-all duration-300 ease-out">
        <Logo />
        <nav className="hidden md:block">
          <ul className="flex gap-8">
            <li>
              <Anchor to={"/"}>Главная</Anchor>
            </li>
            <li>
              <Anchor to={"#"}>Обучение</Anchor>
            </li>
            <li>
              <Anchor to={"#"}>Галерея</Anchor>
            </li>
            <li>
              <Anchor to={"#"}>О нас</Anchor>
            </li>
            {user ? (
              <button
                className="border-text-color text-text-color block w-fit py-[2px] hover:border-y-2 hover:border-solid hover:py-0 focus:border-y-2 focus:border-solid focus:py-0"
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
