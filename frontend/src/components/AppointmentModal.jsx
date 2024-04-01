import { useEffect, useState } from "react";
import { useAppointment } from "../hooks/useAppointment";
import { useSelector, useDispatch } from "react-redux";
import Button from "./elements/Button";
import axios from "axios";
import { toggleModal } from "../store/modal/isModal";
import { useAuthContext } from "../hooks/useAuthContext";

const AppointmentModal = () => {
  const isLoaded = useSelector((state) => state.isLoaded.value);
  const isModalOpen = useSelector((state) => state.isModalOpen.value);
  const dispatch = useDispatch();
  const { user } = useAuthContext();
  const { makeAppointment, error } = useAppointment();
  const [customerId, setCustomerId] = useState("65ef380bdce05bbb9179819d");
  const [schedule, setSchedule] = useState("");
  const [scheduleId, setScheduleId] = useState("");
  const [service, setService] = useState("");
  const [name, setName] = useState("");
  const [serviceList, setServiceList] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [instagramNickname, setInstagramNickname] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    toggleModal();
    await makeAppointment(
      name,
      customerId,
      scheduleId,
      service,
      phoneNumber,
      instagramNickname,
    );
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

  const getUser = async () => {
    if (user) {
      const authUser = JSON.parse(localStorage.getItem("user"));
      setCustomerId(authUser._id);
      setName(authUser.name);
      setPhoneNumber(authUser?.contacts?.phoneNumber);
      setInstagramNickname(authUser?.contacts?.intagramNickname);
    }
    return;
  };

  useEffect(() => {
    getAppointmentData();
    getDateData();
    getUser();
  }, [user]);

  return (
    <div className="fixed inset-x-0">
      <dialog
        id="appointmentModal"
        className={
          (!isModalOpen && " hidden ") +
          " bg-secodary flex max-h-[85dvh] flex-col items-end overflow-y-scroll shadow-2xl"
        }
      >
        <form
          className="flex w-80 flex-col items-center gap-3 py-8 md:mx-48 md:items-start"
          onSubmit={handleSubmit}
        >
          {!user && (
            <>
              <label htmlFor="appointment-name" className="text-text-color">
                Имя
              </label>
              <input
                type="text"
                disabled={!isLoaded}
                className="h-10 w-9/12 bg-secondary/50 px-2 text-text-color focus:outline-secondary disabled:text-secondary md:w-full"
                onChange={(e) => setName(e.target.value)}
                value={name}
                id="appointment-name"
              />
              <label
                htmlFor="appointment-instagramNickname"
                className="text-text-color"
              >
                Instagram
              </label>
              <input
                type="text"
                disabled={!isLoaded}
                className="h-10 w-9/12 bg-secondary/50 px-2 text-text-color focus:outline-secondary disabled:text-secondary md:w-full"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
                id="appointment-instagramNickname"
              />
              <label
                htmlFor="appointment-phoneNumber"
                className="text-text-color"
              >
                Номер телефона
              </label>
              <input
                type="tel"
                disabled={!isLoaded}
                className="h-10 w-9/12 bg-secondary/50 px-2 text-text-color focus:outline-secondary disabled:text-secondary md:w-full"
                onChange={(e) => setInstagramNickname(e.target.value)}
                value={instagramNickname}
                id="appointment-phoneNumber"
              />
            </>
          )}
          <label
            htmlFor="appointment-service"
            id="appointment-service"
            className="text-text-color"
          >
            Услуга
          </label>
          <select
            className="h-10 w-9/12 bg-secondary/50 px-2 text-text-color focus:outline-secondary disabled:text-secondary md:w-full"
            disabled={!isLoaded}
            id="appointment-service"
            value={service}
            onChange={(e) => setService(e.target.value)}
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
          </select>
          <label htmlFor="appointment-date" className="text-text-color">
            Дата и время
          </label>
          <select
            id="appointment-scheduleId"
            className="h-10 w-9/12 bg-secondary/50 px-2 text-text-color focus:outline-secondary disabled:text-secondary md:w-full"
            disabled={!isLoaded}
            value={scheduleId}
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
                <span key={item._id}>Стоимость: {item.price}р.</span>
              ))}
          {Array.isArray(serviceList) &&
            serviceList
              .filter((item) => item._id === service)
              .map((item) => (
                <span key={item._id}>Длительность: {item.duration}м.</span>
              ))}
          <div className="flex w-9/12 justify-between md:w-80">
            <Button disabled={!isLoaded} onClick={handleSubmit}>
              Отправить
            </Button>
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
