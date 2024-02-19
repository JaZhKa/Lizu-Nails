import { useState } from "react";
import AnchorsUl from "./AnchorsUl";

const Burger = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <nav
        className={"burger md:hidden" + (isActive ? " active" : "")}
        onClick={() => setIsActive(!isActive)}
      >
        <span></span>
      </nav>
      <nav
        className={
          "top-[56px] z-10 w-full transition-all duration-300 ease-out md:hidden" +
          (isActive ? " h-fit" : " h-0 -translate-y-96 opacity-0")
        }
      >
      <AnchorsUl />
      </nav>
    </>
  );
};

export default Burger;
