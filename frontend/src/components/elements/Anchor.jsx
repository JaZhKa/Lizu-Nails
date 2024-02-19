const Anchor = ({ children, href }) => {
  return (
    <>
      <a
        href={href}
        className="block w-fit border-gray-dark py-[2px] text-gray-dark hover:border-y-2 hover:border-solid hover:py-0 focus:border-y-2 focus:border-solid focus:py-0"
      >
        {children}
      </a>
    </>
  );
};
export default Anchor;
