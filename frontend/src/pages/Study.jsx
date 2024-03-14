import Button from "../components/elements/Button";
import courseImg1 from "./../assets/images/HomePage/main_1.jpg";
import courseImg2 from "./../assets/images/HomePage/main_2.jpg";

const Study = () => {
  return (
    <div>
      <h2 className="mb-16 mt-8 text-center text-6xl text-text-color md:text-left md:text-7xl xl:text-8xl">
        Обучение
      </h2>
      <div className="flex flex-col gap-24 md:w-[768px] lg:w-[976px]">
        <article className="flex flex-col items-center gap-8">
          <h3 className="mb-16 text-center text-3xl text-text-color md:text-4xl xl:text-7xl">
            Базовый
          </h3>
          <div className="flex flex-col items-center md:flex-row lg:gap-[2vw]">
            <img
              className="h-full w-4/5 object-cover md:w-1/2"
              src={courseImg1}
              alt="base course image"
            />
            <ul>
              <li className="mb-2 p-7 text-text-color">
                <b>Основы и техники</b>
                <br />
                <p className="mt-7 text-text-color">
                  Базовый курс охватывает все от безопасного маникюра до самых
                  востребованных дизайнов.
                </p>
              </li>
              <li className="pmb-2 p-7 text-text-color">
                <b>Практический опыт</b> <br />
                <p className="mt-7 text-text-color">
                  Ученики получают возможность отработать навыки на практике в
                  реальных условиях салона.
                </p>
              </li>
              <li className="mb-2 p-7 text-text-color">
                <b>Старт карьеры</b>
                <br />
                <p className="mt-7 text-text-color">
                  Курс предлагает инструменты для быстрого старта в профессии,
                  включая подготовку портфолио и помощь в трудоустройстве.
                </p>
              </li>
            </ul>
          </div>
          <Button>Заказать</Button>
        </article>
        <hr className="w-48 self-center bg-text-color" />
        <article className="flex flex-col items-center gap-8">
          <h3 className="mb-16 text-center text-3xl text-text-color md:text-4xl xl:text-7xl">
            Продвинутый
          </h3>
          <div className="flex flex-col items-center md:flex-row lg:gap-[2vw]">
            <img
              className="h-full w-4/5 object-cover md:w-1/2"
              src={courseImg2}
              alt="advance course image"
            />
            <ul>
              <li className="mb-2 p-7 text-text-color">
                <b>Углубленные знания</b>
                <br />
                <p className="mt-7 text-text-color">
                  Продвинутый курс расширяет базовые навыки, включая работу с
                  инновационными материалами и технологиями.
                </p>
              </li>
              <li className="mb-2 p-7 text-text-color">
                <b>Специализированные техники</b>
                <br />
                <p className="mt-7 text-text-color">
                  Курс охватывает продвинутые стили маникюра, такие как гель и
                  шеллак, и предлагает детальное изучение нейл-арта.
                </p>
              </li>
              <li className="mb-2 p-7 text-text-color">
                <b>Профессиональное развитие</b> <br />
                <p className="mt-7 text-text-color">
                  Предоставляется персональный план развития и поддержка для
                  быстрого старта и продвижения в карьере мастера маникюра.
                </p>
              </li>
            </ul>
          </div>
          <Button>Заказать</Button>
        </article>
      </div>
    </div>
  );
};

export default Study;
