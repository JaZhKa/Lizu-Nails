import Logo from "./elements/Logo";
import Burger from "./elements/Burger-menu";

const Header = () => {
  return (
    <>
      <div className="z-100 flex w-full flex-wrap items-center justify-between bg-gray-light/30 backdrop-blur-sm transition-all duration-300 ease-out top-0 sticky">
        <Logo />
        <Burger />
      </div>
    </>
  );
};

export default Header;
