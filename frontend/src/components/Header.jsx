import Logo from "./elements/Logo";
import Burger from "./elements/Burger-menu";

const Header = () => {
  return (
    <>
      <div className="flex w-full flex-wrap items-center justify-between bg-secondary/30 backdrop-blur-sm transition-all duration-300 ease-out top-0 sticky">
        <Logo />
        <Burger />
      </div>
    </>
  );
};

export default Header;
