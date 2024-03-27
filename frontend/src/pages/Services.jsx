import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const Services = () => {
  const [services, setServices] = useState("");

  const getServices = async () => {
    try {
      await axios
        .get("http://localhost:3000/api/service")
        .catch((error) => {
          if (error.response.status !== 200) {
            console.log("Не удалось получить данные.");
          }
        })
        .then((res) => {
          setServices(res.data);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getServices();
  }, []);

  return (
    <div>
      <h2 className="mb-16 mt-8 text-center text-6xl text-text-color md:text-left md:text-7xl xl:text-8xl">
        Услуги
      </h2>
      <article>
        <h3 className="mb-8 text-center text-3xl text-text-color md:text-4xl xl:text-5xl">
          Маникюр
        </h3>
        {Array.isArray(services) &&
          services
            .filter((service) => service.serviceType === "Маникюр")
            .map((service) => (
              <div
                className="mb-10 flex flex-col items-center gap-2 text-center md:items-start"
                key={service._id}
              >
                <h4 className="text-xl font-semibold text-text-color">
                  {service.title}
                </h4>
                <p className="text-text-color">{service?.description}</p>
                <p className="text-text-color">Стоимость: {service.price}р.</p>
                <p className="text-text-color">
                  Продолжительность: {service.duration}м.
                </p>
              </div>
            ))}
      </article>
      <article>
        <h3 className="mb-8 text-center text-3xl text-text-color md:text-4xl xl:text-5xl">
          Наращивание
        </h3>
        {Array.isArray(services) &&
          services
            .filter((service) => service.serviceType === "Наращивание")
            .map((service) => (
              <div
                className="mb-10 flex flex-col items-center gap-2 text-center md:items-start"
                key={service._id}
              >
                <h4 className="text-xl font-semibold text-text-color">
                  {service.title}
                </h4>
                <p className="text-text-color">{service?.description}</p>
                <p className="text-text-color">Стоимость: {service.price}р.</p>
                <p className="text-text-color">
                  Продолжительность: {service.duration}м.
                </p>
              </div>
            ))}
      </article>
      <article>
        <h3 className="mb-8 text-center text-3xl text-text-color md:text-4xl xl:text-5xl">
          Педикюр
        </h3>
        {Array.isArray(services) &&
          services
            .filter((service) => service.serviceType === "Педикюр")
            .map((service) => (
              <div
                className="mb-10 flex flex-col items-center gap-2 text-center md:items-start"
                key={service._id}
              >
                <h4 className="text-xl font-semibold text-text-color">
                  {service.title}
                </h4>
                <p className="text-text-color">{service?.description}</p>
                <p className="text-text-color">Стоимость: {service.price}р.</p>
                <p className="text-text-color">
                  Продолжительность: {service.duration}м.
                </p>
              </div>
            ))}
      </article>
    </div>
  );
};

export default Services;
