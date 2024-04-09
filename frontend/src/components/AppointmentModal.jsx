import { useEffect, useState } from "react";
import { useAppointment } from "../hooks/useAppointment";
import { useSelector, useDispatch } from "react-redux";
import Button from "./elements/Button";
import Input from "./elements/Input";
import Select from "./elements/Select";
import axios from "axios";
import { toggleModal } from "../store/modal/isModal";
import { useAuthContext } from "../hooks/useAuthContext";

const AppointmentModal = () => {
  const isLoaded = useSelector((state) => state.isLoaded.value);
  const isModalOpen = useSelector((state) => state.isModalOpen.value);
  const dispatch = useDispatch();
  const { user } = useAuthContext();
  const { makeAppointment, error } = useAppointment();
  const [schedule, setScheduleList] = useState("");
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

  const fetchData = async (url) => {
    try {
      await axios
        .get(`http://localhost:3000/api/${url}`)
        .catch((error) => {
          if (error.response.status !== 200) {
            console.log("Не удалось получить данные.");
          }
        })
        .then((res) => {
          switch (url) {
            case url === "service":
              setServiceList(res.data);
              break;
            case url === "schedule":
              setScheduleList(res.data);
              break;
            default:
              break;
          }
        });
    } catch (error) {
      console.log(error);
    }
  };

  const formatDateTime = (date) => {
    const options = { day: "numeric", month: "long" };
    const time = new Date(date);
    const hours = time.getHours();
    const minutes = time.getMinutes().toString().padStart(2, "0");
    return `${time.toLocaleString("ru-Ru", options)} | ${hours}:${minutes}`;
  };

  useEffect(() => {
    fetchData("service");
    fetchData("schedule");
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
          <Select
            htmlFor={"service"}
            disabled={!isLoaded}
            id={"service"}
            value={service}
            onChange={(e) => setService(e.target.value)}
            name={"service"}
            required
            hidOption={"Выберите услугу"}
            option={serviceList}
            valueKey={"_id"}
            textKey={"title"}
          >
            Услуга
          </Select>
          <Select
            htmlFor={"scheduleId"}
            disabled={!isLoaded}
            id={"scheduleId"}
            value={scheduleId}
            onChange={(e) => setScheduleId(e.target.value)}
            name={"scheduleId"}
            required
            hidOption={"Выберите дату и время"}
            option={schedule}
            valueKey={"_id"}
            textKey={(item) => formatDateTime(item.start)}
          >
            Дата и время
          </Select>
          {Array.isArray(serviceList) &&
            serviceList
              .filter((item) => item._id === service)
              .map((item) => (
                <div key={item._id} className="text-center">
                  <span className="text-text-color">
                    Стоимость: {item.price} р.
                  </span>
                  <br />
                  <span className="text-text-color">
                    Длительность: {item.duration} мин.
                  </span>
                </div>
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
