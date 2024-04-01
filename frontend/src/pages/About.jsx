import aboutImg1 from "./../assets/images/About/About_img_min.jpg";

const About = () => {
  return (
    <div>
      <h2 className="mb-16 mt-8 text-center text-6xl text-text-color md:text-left md:text-7xl xl:text-8xl">
        Обо мне
      </h2>
      <div className="flex flex-col gap-24 md:w-[768px] lg:w-[976px]">
        <section>
          <article className="mb-8 flex flex-col items-center md:flex-row lg:gap-[2vw]">
            <img
              className="h-full w-4/5 object-cover md:w-1/2"
              src={aboutImg1}
              alt="About image"
            />
            <div>
              <h3 className="my-8 text-center text-3xl text-text-color md:text-4xl xl:text-5xl">
                Привет, я Лиза!
              </h3>
              <div className="mb-2 p-7 text-justify text-text-color">
                <p className="text-text-color">
                  Я мастер по маникюру и педикюру в Минске. А также
                  преподаватель по маникюру для начинающих и уже имеющих опыт
                  работы мастеров.
                </p>
                <p className="text-text-color">
                  <b>Опыт работы в сфере составляет более 6 лет.</b>
                </p>
                <p className="text-text-color">
                  Всё это время я постоянно обучаюсь и совершенствую свой навык.
                </p>
                <p className="text-text-color">
                  На данный момент в мой прайс в маникюре включена работа гелем,
                  ремонты и исправление архитектуры ногтей, я практически не
                  работаю мягкими материалами. Поэтому от меня вы точно уйдёте с
                  ровной и чёткой формой ногтей. Так же я поддержу любую вашу
                  идею дизайна, помогу доработать в соответствии с современными
                  тенденциями, или просто выполню на ваш вкус. На своих курсах я
                  учу грамотно пользоваться гелем и использовать его возможности
                  по максимуму. А также делать качественный комбинированный
                  маникюр без порезов и боли для клиента.
                </p>
                <p className="text-text-color">
                  В педикюре я особенно уделяю внимание здоровью ногтей и стоп,
                  делаю тонкое покрытие и правильную обработку, которая не
                  навредит вашим ногтям.
                </p>
              </div>
            </div>
          </article>
        </section>
        <hr className="w-48 self-center bg-text-color" />
        <section className="flex flex-col items-center">
          <h3 className="my-8 text-center text-3xl text-text-color md:text-4xl xl:text-5xl">
            Отзывы
          </h3>
          <div className="flex w-full flex-col gap-8 md:w-[768px]">
            <p className="p-4 text-justify text-text-color">
              - Я в восторге от маникюра в этом салоне! Мастер не только
              идеально сделал форму ногтей, но и предложил уникальный дизайн,
              который продержался очень долго. Спасибо за ваш профессионализм и
              творческий подход! -
            </p>
            <p className="p-4 text-justify text-text-color">
              - Это был лучший маникюр в моей жизни! Мастер был внимателен к
              моим пожеланиям и сделал все аккуратно и красиво. Я обязательно
              вернусь снова и порекомендую этот салон своим друзьям. -
            </p>
            <p className="p-4 text-justify text-text-color">
              - Превосходный сервис и великолепный результат! Мастер по маникюру
              проявил исключительную заботу и внимание к деталям, создав
              идеальный маникюр, который дополнил мой образ. Я полностью
              довольна! -
            </p>
            <p className="p-4 text-justify text-text-color">
              - Педикюр был просто невероятным! Мастер сделал все быстро и
              качественно, а массаж стоп был настолько расслабляющим, что я
              чувствовала себя как в спа. Мои ноги выглядят идеально, спасибо за
              вашу работу! -
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
