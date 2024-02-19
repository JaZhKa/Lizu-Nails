import Anchor from "./Anchor";

const AnchorsUl = () => {
  return (
    <ul className="m-12 flex flex-col items-center gap-4">
      <Anchor href={'#'}>Главная</Anchor>
      <Anchor href={'#'}>Обучние</Anchor>
      <Anchor href={'#'}>Галерея</Anchor>
      <Anchor href={'#'}>Обо мне</Anchor>
    </ul>
  );
};

export default AnchorsUl;
