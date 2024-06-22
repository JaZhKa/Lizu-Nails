import { useEffect, useState } from "react";
import { useAppointment } from "../hooks/useAppointment";
import { useSelector, useDispatch } from "react-redux";
import Button from "./elements/Button";
import Input from "./elements/Input";
import Select from "./elements/Select";
import axios from "axios";
import { toggleModal } from "../store/modal/isModal";
import { useAuthContext } from "../hooks/useAuthContext";
import { useInput } from "../hooks/useInput";

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
  const nameValidation = useInput("", {
    isName: true,
    maxLength: 30,
    minLength: 2,
    isEmpty: true,
  });
  const instagramNicknameValidation = useInput("", {
    maxLength: 30,
    minLength: 1,
    isEmpty: true,
  });
  const phoneNumberValidation = useInput("", {
    maxLength: 13,
    minLength: 13,
    isEmpty: true,
  });

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
            case "service":
              setServiceList(res.data);
              break;
            case "schedule":
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
                onChange={(e) => {
                  nameValidation.onChange(e);
                  setName(e.target.value);
                }}
                onBlur={(e) => nameValidation.onBlur(e)}
                value={name}
                id={"name"}
                name={"name"}
                placeholder={"Имя"}
                autoComplete={"given-name"}
                style={
                  nameValidation.isDirty &&
                  (nameValidation.isEmpty ||
                    nameValidation.minLengthError ||
                    nameValidation.maxLengthError ||
                    nameValidation.isNameError) &&
                  "focus:outline-error/50 focus:outline-2 outline outline-2 outline-error/50"
                }
                required
              >
                Имя
              </Input>
              {nameValidation.isDirty &&
                (nameValidation.isEmpty ||
                  nameValidation.minLengthError ||
                  nameValidation.maxLengthError ||
                  nameValidation.isNameError) && (
                  <div className="text-xs text-error">
                    {nameValidation.errorMessage}
                  </div>
                )}
              <Input
                htmlFor={"instagramNickname"}
                disabled={!isLoaded}
                onChange={(e) => {
                  setInstagramNickname(e.target.value);
                  instagramNicknameValidation.onChange(e);
                }}
                value={instagramNickname}
                id={"instagramNickname"}
                name={"instagramNickname"}
                type={"instagramNickname"}
                placeholder={"Instagram"}
                onBlur={(e) => instagramNicknameValidation.onBlur(e)}
                style={
                  instagramNickname.isDirty &&
                  (instagramNickname.isEmpty ||
                    instagramNickname.minLengthError ||
                    instagramNickname.maxLengthError) &&
                  "focus:outline-error/50 focus:outline-2 outline outline-2 outline-error/50"
                }
              >
                Instagram
              </Input>
              {instagramNicknameValidation.isDirty &&
                (instagramNicknameValidation.isEmpty ||
                  instagramNicknameValidation.minLengthError ||
                  instagramNicknameValidation.maxLengthError) && (
                  <div className="text-xs text-error">
                    {instagramNicknameValidation.errorMessage}
                  </div>
                )}
              <Input
                htmlFor={"phoneNumber"}
                disabled={!isLoaded}
                type={"phoneNumber"}
                placeholder={"+375292528440"}
                onChange={(e) => {
                  setPhoneNumber(e.target.value);
                  phoneNumberValidation.onChange(e);
                }}
                onBlur={(e) => phoneNumberValidation.onBlur(e)}
                value={phoneNumber}
                id={"phoneNumber"}
                name={"phoneNumber"}
                style={
                  phoneNumberValidation.isDirty &&
                  (phoneNumberValidation.isEmpty ||
                    phoneNumberValidation.minLengthError ||
                    phoneNumberValidation.maxLengthError) &&
                  "focus:outline-error/50 focus:outline-2 outline outline-2 outline-error/50"
                }
                required
              >
                Номер телефона
              </Input>
              {phoneNumberValidation.isDirty &&
                (phoneNumberValidation.isEmpty ||
                  phoneNumberValidation.minLengthError ||
                  phoneNumberValidation.maxLengthError) && (
                  <div className="text-xs text-error">
                    {phoneNumberValidation.errorMessage}
                  </div>
                )}
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
            <Button
              disabled={
                !isLoaded ||
                nameValidation.isEmpty ||
                nameValidation.minLengthError ||
                nameValidation.maxLengthError ||
                nameValidation.isNameError ||
                instagramNicknameValidation.maxLengthError ||
                phoneNumberValidation.isEmpty ||
                phoneNumberValidation.minLengthError ||
                phoneNumberValidation.maxLengthError
              }
            >
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
