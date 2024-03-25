import mainImg1 from "./../assets/images/HomePage/main_1_min.jpg";
import mainImg2 from "./../assets/images/HomePage/main_2_min.jpg";
import mainImg3 from "./../assets/images/HomePage/main_3_min.jpg";
import mainImg4 from "./../assets/images/HomePage/main_4_min.jpg";
import mainImg5 from "./../assets/images/HomePage/main_5_min.jpg";
import mainImg6 from "./../assets/images/HomePage/main_6_min.jpg";
import mainImg7 from "./../assets/images/HomePage/main_7_min.jpg";
import mainImg8 from "./../assets/images/HomePage/main_8_min.jpg";
import mainImg9 from "./../assets/images/HomePage/main_9_min.jpg";
import mainImg10 from "./../assets/images/HomePage/main_10_min.jpg";
import mainImg11 from "./../assets/images/HomePage/main_11_min.jpg";
import mainImg12 from "./../assets/images/HomePage/main_12_min.jpg";
import descImg1 from "./../assets/images/HomePage/main_desc_1_min.jpg";
import descImg2 from "./../assets/images/HomePage/main_desc_2_min.jpg";
import descImg3 from "./../assets/images/HomePage/main_desc_3_min.jpg";
import Button from "./../components/elements/Button";
import Card from "../components/Card";
import AppointmentModal from "../components/AppointmentModal";
import { useDispatch } from "react-redux";
import { toggleModal } from "../store/modal/isModal";

const Home = () => {
  const dispatch = useDispatch();

  return (
    <div className="flex w-full flex-col gap-y-16 md:gap-y-48">
      <AppointmentModal />
      <section className="h-[66.666667vh]">
        <div className="absolute top-[56px] -z-50 grid h-2/3 grid-flow-col grid-rows-3 md:top-[79px]">
          <div className="row-span-2 h-full w-full bg-secondary">
            <img
              className="h-full w-full object-cover"
              src={mainImg6}
              alt="background"
            />
          </div>
          <div className="col-span-2 h-full w-full bg-secondary">
            <img
              className="h-full w-full object-cover"
              src={mainImg11}
              alt="background"
            />
          </div>
          <div className="h-full w-full bg-secondary">
            <img
              className="h-full w-full object-cover"
              src={mainImg10}
              alt="background"
            />
          </div>
          <div className="h-full w-full bg-secondary">
            <img
              className="h-full w-full object-cover"
              src={mainImg9}
              alt="background"
            />
          </div>
          <div className="h-full w-full bg-secondary">
            <img
              className="h-full w-full object-cover"
              src={mainImg8}
              alt="background"
            />
          </div>
          <div className="row-span-2 h-full w-full bg-secondary">
            <img
              className="h-full w-full object-cover"
              src={mainImg7}
              alt="background"
            />
          </div>
          <div className="col-span-2 row-span-2 hidden h-full w-full bg-secondary md:block">
            <img
              className="h-full w-full object-cover"
              src={mainImg4}
              alt="background"
            />
          </div>
          <div className="col-span-2 hidden h-full w-full bg-secondary md:block ">
            <img
              className="h-full w-full object-cover"
              src={mainImg5}
              alt="background"
            />
          </div>
          <div className="row-span-3 h-full w-full bg-secondary">
            <img
              className="h-full w-full object-cover"
              src={mainImg12}
              alt="background"
            />
          </div>
          <div className="row-span-2 hidden h-full w-full bg-secondary sm:block">
            <img
              className="h-full w-full object-cover"
              src={mainImg3}
              alt="background"
            />
          </div>
          <div className="col-span-2 hidden h-full w-full bg-secondary sm:block">
            <img
              className="h-full w-full object-cover"
              src={mainImg2}
              alt="background"
            />
          </div>
          <div className="row-span-2 hidden h-full w-full bg-secondary sm:block">
            <img
              className="h-full w-full object-cover"
              src={mainImg1}
              alt="background"
            />
          </div>
        </div>
        <div className="absolute top-[57px] -z-40 h-2/3 w-full bg-gradient-to-t from-[white] to-50% md:top-[80px]"></div>
        <div className="radial absolute inset-[10%] top-[56px] -z-30 h-full w-4/5 overflow-hidden to-50% md:left-1/2 md:top-[79px] md:w-2/5"></div>
        <div className="md:left-3/5 inset-[10%] flex h-full w-full flex-col items-center md:w-4/5 md:items-end">
          <div className="flex w-4/5 flex-col md:w-2/3 md:items-end">
            <h1 className="mb-6 mt-12 text-center text-4xl text-text-color md:text-right md:text-6xl xl:mb-16 xl:text-8xl">
              Идеальный маникюр ждёт!
            </h1>
            <h3 className="mb-10 text-center text-2xl text-text-color md:mb-10 md:text-right md:text-3xl xl:mb-16 xl:text-6xl">
              Качество, скорость, профессионализм
            </h3>
            <Button
              style="xl:text-6xl text-2xl"
              onClick={() => dispatch(toggleModal())}
            >
              Записаться
            </Button>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center">
        <h2 className="mb-16 text-center text-3xl text-text-color md:text-4xl xl:text-7xl">
          Услуги
        </h2>
        <div className="mx-8 gap-16 md:flex md:w-[768px] lg:w-[976px]">
          <div className="md:w-1/2">
            <div className="flex-col gap-8 md:ml-16 md:flex lg:gap-20 xl:gap-36">
              <article>
                <h3 className="mb-4 text-center text-xl text-text-color md:text-right md:text-2xl">
                  Маникюр с долговременным покрытием
                </h3>
                <p className="text-center text-base text-text-color md:text-right md:text-xl">
                  Чистый и качественный комбинированный маникюр с тонким изящным
                  покрытием украсит ваши руки и ваш образ в целом.
                </p>
                <p className="mb-8 text-center text-xs text-text-color md:text-right">
                  от 60р
                </p>
              </article>
              <article>
                <h3 className="mb-4 text-center text-xl text-text-color md:text-right md:text-2xl">
                  Педикюр
                </h3>
                <p className="text-center text-base text-text-color md:text-right md:text-xl">
                  Идеальный педикюр в любое время года без вреда для ваших
                  ногтей. Качественное и тонкое покрытие.
                </p>
                <p className="mb-8 text-center text-xs text-text-color md:text-right">
                  от 35р
                </p>
              </article>
              <article>
                <h3 className="mb-4 text-center text-xl text-text-color md:text-right md:text-2xl">
                  Наращивание ногтей
                </h3>
                <p className="text-center text-base text-text-color md:text-right md:text-xl">
                  Наращивание ногтей на верхние формы даже самой экстримальной
                  длины.
                </p>
                <p className="mb-8 text-center text-xs text-text-color md:text-right">
                  от 70р
                </p>
              </article>
            </div>
          </div>
          <div className="hidden flex-col items-center justify-center md:flex md:w-1/2 xl:gap-2">
            <img
              className="-z-20 -mb-12 -mr-16 h-[256px] w-[256px] object-cover xl:m-0"
              src={descImg1}
              alt="manicure"
            />
            <img
              className="-z-30 -ml-4 h-[256px] w-[256px] object-cover xl:m-0"
              src={descImg2}
              alt="pedicure"
            />
            <img
              className="-z-20 -mr-10 -mt-8 h-[256px] w-[256px] object-cover xl:m-0"
              src={descImg3}
              alt="Nail extensions"
            />
          </div>
        </div>
      </section>
      <section>
        <h2 className="mb-16 text-center text-3xl text-text-color md:text-4xl xl:text-7xl">
          Обучение
        </h2>
        <div className="flex flex-col items-center justify-center gap-16 md:flex-row">
          <Card
            name={"База"}
            items={["Основы техника", "Практический опыт", "Старт карьеры"]}
            imgUrl={mainImg1}
            to={"/study#base-course"}
          ></Card>
          <Card
            name={"Продвинутый"}
            items={[
              "Углубленные навыки",
              "Специализированные техники",
              "Профессиональное развитие",
            ]}
            imgUrl={mainImg10}
            to={"/study#advanced-course"}
          ></Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
