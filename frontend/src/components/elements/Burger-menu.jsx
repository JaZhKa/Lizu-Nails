import { useState } from "react";

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
        <ul className="m-12 flex flex-col items-center gap-4">
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
          <li>Lorem ipsum dolor</li>
        </ul>
      </nav>
    </>
  );
};

export default Burger;
