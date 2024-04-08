import { useEffect, useState } from "react";
import { useAppointment } from "../hooks/useAppointment";
import { useSelector, useDispatch } from "react-redux";
import Button from "./elements/Button";
import Input from "./elements/Input";
import Select from "./elements/Select";
import Options from "./elements/Options";
import axios from "axios";
import { toggleModal } from "../store/modal/isModal";
import { useAuthContext } from "../hooks/useAuthContext";

const AppointmentModal = () => {
  const isLoaded = useSelector((state) => state.isLoaded.value);
  const isModalOpen = useSelector((state) => state.isModalOpen.value);
  const dispatch = useDispatch();
  const { user } = useAuthContext();
  const { makeAppointment, error } = useAppointment();
  const [schedule, setSchedule] = useState("");
  const [scheduleId, setScheduleId] = useState("");
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [serviceList, setServiceList] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [instagramNickname, setInstagramNickname] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    if (user) {
      const authUser = JSON.parse(localStorage.getItem("user"));
      formData.append("customerId", authUser._id);
      formData.append("name", authUser.name);
      formData.append("phoneNumber", authUser?.contacts?.phoneNumber);
      formData.append(
        "instagramNickname",
        authUser?.contacts?.intagramNickname,
      );
    }
    const payload = Object.fromEntries(formData);
    const contacts = {
      instagramNickname,
      phoneNumber,
    };
    payload.contacts = contacts;
    await makeAppointment(payload);
    toggleModal();
  };

  const getAppointmentData = async () => {
    try {
      await axios
        .get("http://localhost:3000/api/service")
        .catch((error) => {
          if (error.response.status !== 200) {
            console.log("Не удалось получить данные.");
          }
        })
        .then((res) => {
          setServiceList(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getDateData = async () => {
    try {
      await axios
        .get("http://localhost:3000/api/schedule")
        .catch((error) => {
          if (error.response.status !== 200) {
            console.log("Не удалось получить данные.");
          }
        })
        .then((res) => {
          setSchedule(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAppointmentData();
    getDateData();
  }, []);

  return (
    <div className="fixed inset-x-0 z-50">
      <dialog
        id="appointmentModal"
        className={
          (!isModalOpen ? " max-h-0 opacity-0 " : " max-h-[85dvh] ") +
          " bg-secodary flex flex-col items-end overflow-y-scroll shadow-2xl transition-all duration-300"
        }
      >
        <form
          className="flex w-80 flex-col items-center gap-3 py-8 md:mx-48 md:items-start"
          onSubmit={handleSubmit}
        >
          {!user && (
            <>
              <Input
                htmlFor={"name"}
                disabled={!isLoaded}
                type={"name"}
                onChange={(e) => setName(e.target.value)}
                value={name}
                id={"name"}
                name={"name"}
                required
              >
                Имя
              </Input>
              <Input
                htmlFor={"instagramNickname"}
                disabled={!isLoaded}
                onChange={(e) => setInstagramNickname(e.target.value)}
                value={instagramNickname}
                id={"instagramNickname"}
                name={"instagramNickname"}
              >
                Instagram
              </Input>
              <Input
                htmlFor={"phoneNumber"}
                disabled={!isLoaded}
                type={"phoneNumber"}
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                id={"phoneNumber"}
                name={"phoneNumber"}
              >
                Номер телефона
              </Input>
            </>
          )}
          {/* <label htmlFor="service" className="text-text-color">
            Услуга
          </label>
          <select
            className="h-10 w-9/12 bg-secondary/50 px-2 text-text-color focus:outline-secondary disabled:text-secondary md:w-full"
            disabled={!isLoaded}
            id="service"
            value={service}
            onChange={(e) => setService(e.target.value)}
            name="service"
          >
            <option hidden value={""}>
              Выберите услугу
            </option>
            {Array.isArray(serviceList) &&
              serviceList.map((item) => (
                <option
                  key={item._id}
                  value={item._id}
                  className="text-text-color"
                >
                  {item.title}
                </option>
              ))}
          </select> */}
          <Select htmlFor={'service'}
            disabled={!isLoaded}
            id={'service'}
            value={service}
            onChange={(e) => setService(e.target.value)}
            name={'service'}
            required
            hidOption={'Выберите услугу'}
            option={serviceList}
            valueKey={"_id"}
            textKey={"title"}
          >Услуга</Select>
          <label htmlFor="scheduleId" className="text-text-color">
            Дата и время
          </label>
          <select
            id="scheduleId"
            className="h-10 w-9/12 bg-secondary/50 px-2 text-text-color focus:outline-secondary disabled:text-secondary md:w-full"
            disabled={!isLoaded}
            value={scheduleId}
            name="scheduleId"
            onChange={(e) => setScheduleId(e.target.value)}
          >
            <option hidden value="">
              Выберите дату и время
            </option>
            {Array.isArray(schedule) &&
              schedule.map((item) => (
                <option key={item._id} value={item._id}>
                  {new Date(item.start).toLocaleString("ru-RU", {
                    day: "numeric",
                    month: "long",
                  })}
                  &nbsp;|&nbsp;{new Date(item.start).getHours()}:
                  {new Date(item.start).getMinutes() < 10
                    ? `0${new Date(item.start).getMinutes()}`
                    : new Date(item.start).getMinutes()}
                </option>
              ))}
          </select>
          {Array.isArray(serviceList) &&
            serviceList
              .filter((item) => item._id === service)
              .map((item) => (
                <span key={item._id}>Стоимость: {item.price} р.</span>
              ))}
          {Array.isArray(serviceList) &&
            serviceList
              .filter((item) => item._id === service)
              .map((item) => (
                <span key={item._id}>Длительность: {item.duration} мин.</span>
              ))}
          <div className="flex w-9/12 justify-between md:w-80">
            <Button disabled={!isLoaded}>Отправить</Button>
            <button
              className="block w-fit border-text-color py-[2px] text-text-color hover:border-y-2 hover:border-solid hover:py-0 focus:border-y-2 focus:border-solid focus:py-0"
              disabled={!isLoaded}
              onClick={() => dispatch(toggleModal())}
              type="button"
            >
              Отмена
            </button>
          </div>
          {error && <p className="text-xs text-error">{error}</p>}
        </form>
      </dialog>
    </div>
  );
};

export default AppointmentModal;
