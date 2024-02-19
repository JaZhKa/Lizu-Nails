import logoAnim from "../../assets/Logo_anim.svg";

const Logo = () => {
  return (
    <div className="w-48 p-2 md:w-60 md:p-4">
      <embed src={logoAnim} type="image/svg+xml" className="w-full" />
    </div>
  );
};

export default Logo;
