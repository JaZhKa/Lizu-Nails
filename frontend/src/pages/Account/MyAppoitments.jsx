import { useState } from "react";
import AppointmentCard from "../../components/AppointmentCard";
import axios from "axios";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

const MyAppoitments = () => {
  const [appointments, setAppointments] = useState("");
  const [cookie] = useCookies("");

  const getAppoinments = async () => {
    await axios
      .get("http://localhost:3000/api/appointment", {
        params: {
          userId: JSON.parse(localStorage.getItem("user"))._id,
        },
        headers: {
          Authorization: "Bearer " + cookie.token,
        },
      })
      .catch((error) => {
        if (error.response.status !== 200) {
          console.log("Не удалось получить данные.");
        }
      })
      .then((res) => setAppointments(res.data));
  };

  useEffect(() => {
    getAppoinments();
  }, []);

  return (
    <div>
      <h3 className="mb-8 text-center text-3xl text-text-color md:text-4xl xl:text-5xl">
        Записи
      </h3>
      <section className="flex flex-col gap-8">
        {appointments.length ? (
          appointments.map((appointment) => (
            <AppointmentCard
              key={appointment._id}
              title={appointment.service.title}
              date={appointment.scheduleId.start}
              price={appointment.service.price}
            />
          ))
        ) : (
          <p className="text-text-color">Записей нет.</p>
        )}
      </section>
    </div>
  );
};

export default MyAppoitments;
