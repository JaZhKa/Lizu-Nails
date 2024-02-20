const Anchor = ({ children, href }) => {
  return (
    <a
      href={href}
      className="block w-fit border-text-color py-[2px] text-text-color hover:border-y-2 hover:border-solid hover:py-0 focus:border-y-2 focus:border-solid focus:py-0"
    >
      {children}
    </a>
  );
};
export default Anchor;
