import { useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { toggleLoaded } from "../store/load/isFormLoaded";
import { toggleModal } from "../store/modal/isModal";

export const useAppointment = () => {
  const [error, setError] = useState(null);
  const changeLoaded = useDispatch();
  const dispatch = useDispatch();

  const makeAppointment = async (
    name,
    customerId,
    masterId,
    date,
    service,
    inst,
    tel,
  ) => {
    changeLoaded(toggleLoaded());
    setError(null);

    await axios
      .post("http://localhost:3000/api/appointment", {
        name,
        customerId,
        masterId,
        date,
        service,
        inst,
        tel,
      })
      .catch((error) => {
        if (error.response.status !== 201) {
          setError("Не удалось создать запись.");
        }
      })
      .then((res) => {
        sessionStorage.setItem("appointment", JSON.stringify(res.data));
        dispatch(toggleModal());
      })
      .finally(() => {
        changeLoaded(toggleLoaded());
      });
  };

  return { makeAppointment, error };
};
