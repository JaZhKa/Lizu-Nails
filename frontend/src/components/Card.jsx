import Anchor from "./elements/Anchor";

const Card = ({name, items, imgUrl, to}) => {

  return (
    <div className="w-[300px] shadow-md">
      <img src={imgUrl} alt="course image" />
      <h3 className="m-4 text-xl text-text-color">{name}</h3>
      <ul className="ml-8">
        {items.map((item) => (
          <li className="mb-2 text-text-color" key={item}>{item}</li>
        ))}
      </ul>
      <nav className="itemm-right m-6 flex justify-end">
        <Anchor to={to}>Подробнее</Anchor>
        {/* <Link className="disabled:bg-secondary bg-primary px-8 py-1 text-secondary transition-all duration-100 hover:bg-accent hover:text-text-color focus:bg-accent focus:text-text-color active:scale-90" to={to}>Подробнее</Link> */}
      </nav>
    </div>
  );
};

export default Card;
