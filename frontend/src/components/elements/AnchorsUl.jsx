import Anchor from "./Anchor";

const AnchorsUl = () => {
  return (
    <ul className="m-12 flex flex-col items-center gap-4">
      <li>
        <Anchor href={"#"}>Главная</Anchor>
      </li>
      <li>
        <Anchor href={"#"}>Обучние</Anchor>
      </li>
      <li>
        <Anchor href={"#"}>Галерея</Anchor>
      </li>
      <li>
        <Anchor href={"#"}>Обо мне</Anchor>
      </li>
    </ul>
  );
};

export default AnchorsUl;
