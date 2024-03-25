import nailsDefault from "./../assets/images/Account/nails_default.png";

const AppointmentCard = ({ title, date, price }) => {
  const AppointmentDate = new Date(date);

  return (
    <article className="flex min-w-64 flex-col items-center gap-4 shadow-md md:flex-row">
      <img
        className="h-4/5 w-4/5 md:h-36 md:w-36"
        src={nailsDefault}
        alt="nails photo"
      />
      <div className="flex flex-col items-center gap-4 p-4 md:items-start md:gap-8">
        <h4 className="text-xl font-semibold text-text-color">{title}</h4>
        <div className="flex-row gap-40 md:flex lg:gap-72 xl:gap-96">
          <p className="text-text-color">
            Дата: {AppointmentDate.getDate()}/{AppointmentDate.getMonth() + 1}/
            {AppointmentDate.getFullYear()} {AppointmentDate.getHours()}:
            {AppointmentDate.getMinutes() < 10
              ? `0${AppointmentDate.getMinutes()}`
              : AppointmentDate.getMinutes()}
          </p>
          <p className="text-text-color">Стоимость: {price}</p>
        </div>
      </div>
    </article>
  );
};

export default AppointmentCard;
