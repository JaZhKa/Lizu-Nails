import { useDispatch, useSelector } from "react-redux";
import { toggleActive } from "./../../store/active/isActive";
import Anchor from "./Anchor";

const Burger = () => {
  const isActive = useSelector((state) => state.isActive.value);
  const dispatch = useDispatch();

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
      >
      <ul className="m-12 flex flex-col items-center gap-4">
      <li>
        <Anchor href={"#"}>Главная</Anchor>
      </li>
      <li>
        <Anchor href={"#"}>Обучение</Anchor>
      </li>
      <li>
        <Anchor href={"#"}>Галерея</Anchor>
      </li>
      <li>
        <Anchor href={"#"}>Обо мне</Anchor>
      </li>
    </ul>
      </nav>
    </>
  );
};

export default Burger;
