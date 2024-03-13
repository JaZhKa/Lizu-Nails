import Button from "../components/elements/Button";
import courseImg1 from "./../assets/images/HomePage/main_1.jpg";
import courseImg2 from "./../assets/images/HomePage/main_2.jpg";

const Study = () => {
  return (
    <div>
      <h2 className="mb-16 mt-8 text-center text-6xl text-text-color md:text-left md:text-7xl xl:text-8xl">
        Обучение
      </h2>
      <div className="flex flex-col gap-24 md:w-[768px]">
        <article className="flex flex-col gap-8 items-center">
          <h3 className="mb-16 text-center text-3xl text-text-color md:text-4xl xl:text-7xl">
            Базовый
          </h3>
          <img
            className="h-full w-4/5 object-cover"
            src={courseImg1}
            alt="base course image"
          />
          <ul>
            <li className="mb-2 text-text-color">
              <b>Основы и техники: </b>Базовый курс охватывает все от
              безопасного маникюра до самых востребованных дизайнов.
            </li>
            <li className="mb-2 text-text-color">
              <b>Практический опыт: </b>Ученики получают возможность отработать
              навыки на практике в реальных условиях салона.
            </li>
            <li className="mb-2 text-text-color">
              <b>Старт карьеры: </b>Курс предлагает инструменты для быстрого
              старта в профессии, включая подготовку портфолио и помощь в
              трудоустройстве.
            </li>
          </ul>
          <Button>Заказать</Button>
        </article>
        <article className="flex flex-col gap-8 items-center">
          <h3 className="mb-16 text-center text-3xl text-text-color md:text-4xl xl:text-7xl">
            Продвинутый
          </h3>
          <img
            className="h-full w-4/5 object-cover"
            src={courseImg2}
            alt="advance course image"
          />
          <ul>
            <li className="mb-2 text-text-color">
              <b>Углубленные знания: </b>Продвинутый курс расширяет базовые
              навыки, включая работу с инновационными материалами и
              технологиями.
            </li>
            <li className="mb-2 text-text-color">
              <b>Специализированные техники: </b>Курс охватывает продвинутые
              стили маникюра, такие как гель и шеллак, и предлагает детальное
              изучение нейл-арта.
            </li>
            <li className="mb-2 text-text-color">
              <b>Профессиональное развитие: </b>Предоставляется персональный
              план развития и поддержка для быстрого старта и продвижения в
              карьере мастера маникюра.
            </li>
          </ul>
          <Button>Заказать</Button>
        </article>
      </div>
    </div>
  );
};

export default Study;
