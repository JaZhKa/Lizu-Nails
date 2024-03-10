import { useDispatch, useSelector } from "react-redux";
import { toggleActive } from "./../../store/active/isActive";
import Anchor from "./Anchor";
import { useAuthContext } from "./../../hooks/useAuthContext";
import { useLogout } from "./../../hooks/useLogout";

const Burger = () => {
  const isActive = useSelector((state) => state.isActive.value);
  const dispatch = useDispatch();
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const handlerLogout = () => {
    logout();
  };

  return (
    <>
      <nav
        className={"burger md:hidden" + (isActive ? " active" : "")}
        onClick={() => dispatch(toggleActive())}
      >
        <span></span>
      </nav>
      <nav
        className={
          "top-[56px] z-10 w-full transition-all duration-300 ease-out md:hidden" +
          (isActive ? " h-fit" : " h-0 -translate-y-96 opacity-0")
        }
        onClick={() => dispatch(toggleActive())}
      >
        <ul className="m-12 flex flex-col items-center gap-4">
          <li>
            <Anchor to={"/"}>Главная</Anchor>
          </li>
          <li>
            <Anchor to={"#"}>Обучение</Anchor>
          </li>
          <li>
            <Anchor to={"/gallery"}>Галерея</Anchor>
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
    </>
  );
};

export default Burger;
