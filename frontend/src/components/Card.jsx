import Button from "./elements/Button";

const Card = ({name, items, imgUrl}) => {
  return (
    <div className="w-[300px] shadow-md">
      <img src={imgUrl} alt="" />
      <h3 className="m-4 text-xl text-text-color">{name}</h3>
      <ul className="ml-8">
        {items.map((item) => (
          <li className="mb-2" key={item}>{item}</li>
        ))}
      </ul>
      <nav className="itemm-right m-6 flex justify-end">
        <Button>Заказать</Button>
      </nav>
    </div>
  );
};

export default Card;
